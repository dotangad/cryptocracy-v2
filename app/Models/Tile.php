<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tile extends Model
{
    use HasFactory;

    public $tile_types = [
        0 => 'LEVEL',
        1 => 'STORY',
        2 => 'SIDEQUEST'
    ];

    public function getTypeAttribute($value)
    {
        return $this->tile_types[$value];
    }

    public function setTypeAttribute($value)
    {
        return $this->attributes['type'] = array_flip($this->tile_types)[$value];
    }

    public function visited()
    {
        return $this->belongsToMany(User::class, 'user_tiles');
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function attempts()
    {
        if ($this->type === 'LEVEL') {
            return $this->hasMany(UserAttempt::class);
        }

        return collect();
    }
}
