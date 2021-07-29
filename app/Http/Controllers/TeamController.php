<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TeamController extends Controller
{
    public function queen(Request $request)
    {
        $u = $request->user();
        $u->team = 'Queen';
        $u->save();

        return Redirect::route('index');
    }

    public function ace(Request $request)
    {
        $u = $request->user();
        $u->team = 'Ace';
        $u->save();

        return Redirect::route('index');
    }
}
