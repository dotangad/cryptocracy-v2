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
        $this->attributes['type'] = array_flip($this->tile_types)[$value];
    }
}
