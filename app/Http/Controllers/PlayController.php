<?php

namespace App\Http\Controllers;

use App\Models\Tile;
use App\Rules\Level;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
            'userTile' => $req
                ->user()
                ->user_tile()
                ->first()
                ->makeHidden(['id', 'created_at', 'updated_at']),
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

    private function submit_sidequest(Request $req)
    {
        $req->validate([
            'link' => ['required', 'url']
        ]);

        $req->user()->submit_sidequest($req->all()['link']);
    }

    private function attempt_level(Request $req)
    {
        $req->validate([
            'answer' => [
                'required',
                'regex:/^[a-z0-9-_]+$/',
                new Level
            ]
        ]);

        $req->user()->mark_solved();
    }

    public function try(Request $req)
    {
        if (
            $req->user()->tile->type === 'SIDEQUEST' &&
            !$req->user()->user_tile->media_link
        ) {
            $this->submit_sidequest($req);
            return Redirect::route('play');
        }

        if ($req->user()->tile->type === 'LEVEL') {
            $this->attempt_level($req);
            return Redirect::route('play');
        }

        abort(Response::HTTP_BAD_REQUEST);
    }
}
