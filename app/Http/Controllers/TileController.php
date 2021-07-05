<?php

namespace App\Http\Controllers;

use App\Models\Tile;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TileController extends Controller
{
    /**
     * Get all Tiles
     */
    public static function format_tiles()
    {
        return Tile::get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Tiles', [
            'tiles' => $this->format_tiles()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tile  $tile
     * @return \Illuminate\Http\Response
     */
    public function show(Tile $tile)
    {
        return Inertia::render('Admin/Tile', [
            'tile' => $tile
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tile  $tile
     * @return \Illuminate\Http\Response
     */
    public function edit(Tile $tile)
    {
        $body = request()->validate([
            'type' => ['required', Rule::in(array_values($tile->tile_types))],
            'content' => ['required', 'string'],
            'comment' => ['string', 'nullable'],
            'solution' => ['required_if:type,LEVEL', 'string', 'nullable'],
            'points' => ['required_if:type,LEVEL', 'integer', 'nullable'],
        ]);

        $tile->type = $body['type'];
        $tile->content = $body['content'];
        $tile->comment = $body['comment'];
        if ($tile->type == 'LEVEL') {
            $tile->solution = $body['solution'];
            $tile->points = $body['points'];
        } else {
            $tile->solution = null;
            $tile->points = null;
        }
        $tile->save();

        return Inertia::render('Admin/Tile', [
            'tile' => $tile
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tile  $tile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tile $tile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tile  $tile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tile $tile)
    {
        //
    }
}
