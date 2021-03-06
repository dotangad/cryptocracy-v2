<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Tile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Get all Users
     */
    public static function format_users()
    {
        return User::get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Users', [
            'users' => $this->format_users()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $referred_by = User::where('id', $user->referred_by)->first();

        return Inertia::render('Admin/User', [
            'user' => $user,
            'users_referred' => User::where('referred_by', $user->id)->count(),
            'referred_by' => $referred_by ? $referred_by->email : '-',
            'tiles' => $user
                ->tiles()
                ->get()
                ->makeHidden(['solution', 'created_at', 'updated_at', 'pivot']),
            'tile' => $user
                ->tile()
                ->first()
                ->makeHidden(['solution', 'created_at', 'updated_at']),
            'pointsHistory' => $user->points_history(),
            'referrals' => User::where('referred_by', $user->id)->get(),
        ]);
    }

    public function admin(User $user)
    {
        $user->admin = !$user->admin;
        $user->save();

        return Redirect::route('users.show', $user);
    }

    public function disqualify(User $user)
    {
        $user->disqualified = !$user->disqualified;
        $user->save();

        return Redirect::route('users.show', $user);
    }

    public function user_tile(User $user, Tile $tile)
    {
        return Inertia::render('Admin/UserTile', [
            'user' => $user,
            'tile' => $tile,
            'userTile' => $user->user_tiles()->where('tile_id', $tile->id)->first(),
            'attempts' => $user->attempts()->where('tile_id', $tile->id)->get()
        ]);
    }

    public function sidequest_points(User $user, Tile $tile)
    {
        $body = request()->validate([
            'points' => 'required|numeric'
        ]);

        if ($tile->type != 'SIDEQUEST') {
            abort(400);
        }

        $ut = $user->user_tiles()->where('tile_id', $tile->id)->first();

        $user->points -= $ut->sidequest_points;
        $user->points += $body['points'];
        $user->save();

        $ut->sidequest_points = $body['points'];
        $ut->save();

        return Redirect::route('users.user_tile', [
            'user' => $user,
            'tile' => $tile,
        ]);
    }

    public function recalibrate_points(User $user)
    {
        $user->recalibrate_points();

        return Redirect::route('users.show', $user);
    }

    public function change_pwd(User $user)
    {
        $body = request()->validate([
            'password' => ['required'],
        ]);

        $user->password = Hash::make($body['password']);
        $user->save();

        return Redirect::route('users.show', $user);
    }
}
