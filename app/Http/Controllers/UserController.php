<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Tile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Get all Users
     */
    public static function format_users()
    {
        return User::get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Users', [
            'users' => $this->format_users()
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return Inertia::render('Admin/User', [
            'user' => $user,
            'tiles' => $user
                ->tiles()
                ->get()
                ->makeHidden(['solution', 'created_at', 'updated_at', 'pivot']),
            'tile' => $user
                ->tile()
                ->first()
                ->makeHidden(['solution', 'created_at', 'updated_at']),
            'pointsHistory' => $user->points_history()
        ]);
    }

    public function promote(User $user)
    {
        $user->admin = 1;
        $user->save();

        return Redirect::route('users.show', $user);
    }

    public function demote(User $user)
    {
        $user->admin = 0;
        $user->save();

        return Redirect::route('users.show', $user);
    }

    public function disqualify(User $user)
    {
        $user->disqualified = 1;
        $user->save();

        return Redirect::route('users.show', $user);
    }

    public function requalify(User $user)
    {
        $user->disqualified = 0;
        $user->save();

        return Redirect::route('users.show', $user);
    }

    public function user_tile(User $user, Tile $tile)
    {
        return Inertia::render('Admin/UserTile', [
            'user' => $user,
            'tile' => $tile,
            'userTile' => $user->user_tiles()->where('tile_id', $tile->id)->first(),
            'attempts' => $user->attempts()->where('tile_id', $tile->id)->get()
        ]);
    }

    public function sidequest_points(User $user, Tile $tile)
    {
        $body = request()->validate([
            'points' => 'required|numeric'
        ]);

        if ($tile->type != 'SIDEQUEST') {
            abort(400);
        }

        $user->points += $body['points'];
        $user->save();

        $ut = $user->user_tiles()->where('tile_id', $tile->id)->first();
        $ut->sidequest_points = $body['points'];
        $ut->save();

        return Redirect::route('users.user_tile', [
            'user' => $user,
            'tile' => $tile,
        ]);
    }
}
