<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function show()
    {
        $users = User::select('team', 'username', 'points')
            ->where('admin', false)
            ->where('disqualified', false)
            ->orderBy('points', 'DESC')
            ->orderBy('last_solved', 'ASC')
            ->get()
            ->map(function ($user, $key) {
                return [
                    'rank' => $key + 1,
                    'team' => $user->team,
                    'username' => $user->username,
                    'points' => $user->points
                ];
            });

        return Inertia::render('Leaderboard', [
            'users' => $users,
            'dq' => User::select('username', 'team', 'points')
                ->where('admin', false)
                ->where('disqualified', true)
                ->get()
        ]);
    }

    public function static()
    {
        return view('leaderboard', [
            'users' => User::select('name')
                ->where('admin', false)
                ->where('disqualified', false)
                ->orderBy('points', 'DESC')
                ->orderBy('last_solved', 'ASC')
                ->get()
                ->map(function ($user, $key) {
                    return [
                        'rank' => $key + 1,
                        'username' => $user->name,
                    ];
                }),
            'dq' => User::select('name')
                ->where('admin', false)
                ->where('disqualified', true)
                ->get()
                ->map(function ($user) {
                    return [
                        'username' => $user->name,
                    ];
                }),
        ]);
    }
}
