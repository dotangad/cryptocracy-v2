<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTile extends Model
{
    use HasFactory;

    protected $fillable = ['ip', 'user_id', 'tile_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tile()
    {
        return $this->belongsTo(Tile::class);
    }
}
