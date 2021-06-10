<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function show()
    {
        return Inertia::render('ComingSoon', ['title' => "Leaderboard"]);
    }

    public function show_random()
    {
        $faker = \Faker\Factory::create();
        $users = [];

        for ($i = 0; $i < 100; $i++) {
            $users[$i] = [
                'rank' => $i + 1,
                'username' => $faker->username()
            ];
        }

        return Inertia::render('Leaderboard', ['users' => $users]);
    }
}
