<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function show()
    {
        $users = User::orderBy('created_at', 'ASC')
            ->where('admin', false)
            ->where('disqualified', false)
            ->get('username')
            ->map(function ($user, $key) {
                return [
                    'rank' => $key + 1,
                    'username' => $user->username
                ];
            });

        return Inertia::render('Leaderboard', ['users' => $users]);
    }
}
