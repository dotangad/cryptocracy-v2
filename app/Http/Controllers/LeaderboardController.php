<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function show()
    {
        $users = User::where('admin', false)
            ->where('disqualified', false)
            ->orderBy('last_solved', 'ASC')
            ->orderBy('points', 'DESC')
            ->get()
            ->map(function ($user, $key) {
                return [
                    'rank' => $key + 1,
                    'id' => $user->id,
                    'username' => $user->username,
                    'points' => $user->points,
                ];
            });

        return Inertia::render('Leaderboard', ['users' => $users]);
    }
}
