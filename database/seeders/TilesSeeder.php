<?php

namespace Database\Seeders;

use App\Models\Tile;
use Illuminate\Database\Seeder;

class TilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tile::factory()->count(39)->create();
    }
}
