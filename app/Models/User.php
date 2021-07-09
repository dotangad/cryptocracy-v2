<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'country',
        'phone',
        'company'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the tile that the user is on.
     */
    public function tile()
    {
        return $this->belongsTo(Tile::class);
    }

    public function can_back()
    {
        $tile = $this->tile;
        if ($tile->id == 1) {
            return false;
        }

        return true;
    }

    public function can_next()
    {
        if ($this->tile->id == 39) {
            return false;
        }

        // if tile is level, and level is not solved - return false
        if ($this->tile->type == "LEVEL" && !$this->user_tile->solved) {
            return false;
        }

        return true;
    }

    public function prev_tile()
    {
        if (!$this->can_back()) {
            return false;
        }

        $this->tile_id = $this->tile->id - 1;
        $this->save();
        return true;
    }

    public function next_tile()
    {
        if (!$this->can_next()) {
            return false;
        }

        $this->tile_id = $this->tile->id + 1;

        /* $user_tile = UserTile */
        /*     ::where('user_id', $this->id) */
        /*     ->where('tile_id', $this->tile_id) */
        /*     ->first(); */

        /* if (!$user_tile) { */
        /*     $user_tile = new UserTile(); */
        /*     $user_tile->user_id = $this->id; */
        /*     $user_tile->tile_id = $this->tile_id; */
        /*     $user_tile->ip = request()->ip(); */
        /*     $user_tile->save(); */
        /* } */

        UserTile::where('user_id', $this->id)
            ->where('tile_id', $this->tile_id)
            ->firstOr(function () {
                return UserTile::create([
                    'user_id' => $this->id,
                    'tile_id' => $this->tile_id,
                    'ip' => request()->ip()
                ]);
            });

        $this->save();

        return true;
    }

    public function tiles()
    {
        return $this->belongsToMany(Tile::class, 'user_tiles');
    }

    public function user_tiles()
    {
        return $this->hasMany(UserTile::class);
    }

    public function user_tile()
    {
        $tile_id = $this->tile->id;
        return $this
            ->hasOne(UserTile::class)
            ->ofMany([], function ($query) use ($tile_id) {
                $query->where('tile_id', '=', $tile_id);
            });
    }

    public function attempts()
    {
        return $this->hasMany(UserAttempt::class);
    }

    public function record_attempt(String $attempt)
    {
        (new UserAttempt([
            'attempt' => $attempt,
            'user_id' => $this->id,
            'tile_id' => $this->tile->id,
            'ip' => request()->ip()
        ]))->save();
    }

    public function submit_sidequest(String $link)
    {
        $this->user_tile->media_link = $link;
        $this->user_tile->save();
    }

    public function mark_solved()
    {
        $this->user_tile->solved = true;
        $this->user_tile->save();

        $this->points += $this->tile->points;
        $this->save();
    }

    public function points_history()
    {
        return array_values($this
            ->user_tiles()
            ->with('Tile')
            ->whereHas('Tile', function ($q) {
                // 0 -> LEVEL
                // 2 -> SIDEQUEST
                $q->where('type', 0)->orWhere('type', 2);
            })
            ->get()
            ->filter(function ($ut) {
                return $ut->sidequest_points != 0 || $ut->solved;
            })
            ->map(function ($ut) {
                $tid = $ut->tile->id;
                return [
                    'points' => $ut->tile->type == 'LEVEL' ? $ut->tile->points : $ut->sidequest_points,
                    'label' => $ut->tile->type . " $tid"
                ];
            })
            ->toArray());
    }

    public function recalibrate_points()
    {
        $calc_points = collect($this->points_history())->reduce(function ($carry, $p) {
            return $carry + $p['points'];
        }, 0);

        if ($calc_points != $this->points) {
            $this->points = $calc_points;
            $this->save();
        }
    }
}
