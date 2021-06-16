<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function show()
    {
        if (Auth::check()) {
            return Inertia::render('IndexAuthenticated');
        }

        return Inertia::render('Index');
    }

    public function about()
    {
        return Inertia::render('About');
    }
}
