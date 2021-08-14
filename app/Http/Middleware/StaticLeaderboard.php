<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

class StaticLeaderboard
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle(Request $request, Closure $next)
  {
    if (
      preg_match("/admin/", $request->path()) ||
      preg_match("/login/", $request->path()) ||
      preg_match("/leaderboard\/static/", $request->path()) ||
      !\Carbon\Carbon::parse(env('END_TIME'))
        ->lt(\Carbon\Carbon::now('Asia/Kolkata'))
    ) {
      return $next($request);
    }

    return Redirect::route('leaderboard.static');
  }
}
