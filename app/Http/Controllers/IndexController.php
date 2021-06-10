<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function show()
    {
        return Inertia::render('Index');
    }

    public function about_show()
    {
        return Inertia::render('About');
    }
}
