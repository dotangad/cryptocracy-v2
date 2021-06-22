<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function show()
    {
        if (Auth::check()) {
            return Inertia::render('IndexAuthenticated', [
                'notifications' => NotificationController::format_notifications()
            ]);
        }

        return Inertia::render('Index');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function dq()
    {
        if (auth()->check() && !auth()->user()->disqualified) {
            return Redirect::route('index');
        }

        return view('disqualified');
    }
}
