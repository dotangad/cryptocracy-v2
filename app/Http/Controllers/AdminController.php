<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserAttempt;
use App\Models\UserTile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function show()
    {
        return Inertia::render('Admin/index', [
            'users' => User::count(),
            'discord_accounts' => User::whereNotNull('discord_id')->count(),
            'attempts' => UserAttempt::count(),
            'levels_solved' => UserTile::where('solved', true)->count(),
            'users_referred' => User::whereNotNull('referred_by')->count(),
            'sidequests_submitted' => UserTile::whereNotNull('media_link')->count()
        ]);
    }
}
