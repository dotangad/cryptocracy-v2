<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\SponsorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [IndexController::class, 'show'])->name('index');
Route::get('/about', [IndexController::class, 'about_show'])->name('about');
Route::get('/leaderboard', [LeaderboardController::class, 'show'])->name('leaderboard');

Route::get('/register', function () {
    return Inertia::render('ComingSoon', ['title' => "Register"]);
});

Route::get('/sponsor', [SponsorController::class, 'show']);
Route::post('/sponsor', [SponsorController::class, 'create']);
