<?php

namespace App\Http\Controllers;

use App\Models\Tile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PlayController extends Controller
{
    public function show(Request $req)
    {
        return Inertia::render('Play', [
            'tiles' => $req
                ->user()
                ->tiles()
                ->get()
                ->makeHidden(['solution', 'created_at', 'updated_at', 'pivot']),
            'tile' => $req
                ->user()
                ->tile()
                ->first()
                ->makeHidden(['solution', 'created_at', 'updated_at']),
            'canBack' => $req->user()->can_back(),
            'canNext' => $req->user()->can_next(),
        ]);
    }

    public function back(Request $req)
    {
        $req->user()->prev_tile();

        return Redirect::route('play');
    }

    public function next(Request $req)
    {
        $req->user()->next_tile();

        return Redirect::route('play');
    }
}
