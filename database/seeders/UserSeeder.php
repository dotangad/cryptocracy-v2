<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserTile;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'Admin';
        $user->email = 'admin@crytichunt.com';
        $user->username = 'admin';
        $user->password = Hash::make('password');
        $user->country = 'IN';
        $user->phone = '+123';
        $user->company = 'Cryptocracy';
        $user->tile_id = 1;
        $user->admin = true;
        $user->save();

        $user_tile = new UserTile();
        $user_tile->user_id = $user->id;
        $user_tile->tile_id = 1;
        $user_tile->save();

        User::factory()->count(100)->create();
    }
}
