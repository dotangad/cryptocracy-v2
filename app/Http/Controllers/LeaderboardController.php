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
            ->orderBy('points', 'DESC')
            ->orderBy('last_solved', 'ASC')
            ->get()
            ->map(function ($user, $key) {
                return [
                    'rank' => $key + 1,
                    'id' => $user->id,
                    'username' => $user->username,
                    'points' => $user->points,
                    'referred_by' => $user->referred_by
                ];
            });

        $users = $users
            ->map(function ($user) use ($users) {
                return [
                    'rank' => $user['rank'],
                    'username' => $user['username'],
                    'points' => $user['points'],
                    'referred' => $users
                        ->filter(function ($u) use ($user) {
                            return $u['referred_by'] == $user['id'];
                        })
                        ->count()
                ];
            });

        return Inertia::render('Leaderboard', ['users' => $users]);
    }
}
