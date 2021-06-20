<?php

use App\Http\Controllers\DiscordController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SponsorController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [IndexController::class, 'show'])
    ->name('index');
Route::get('/about', [IndexController::class, 'about'])
    ->name('about');
Route::get('/leaderboard', [LeaderboardController::class, 'show'])
    ->name('leaderboard');

Route::get('/register', [RegisterController::class, 'show'])
    ->middleware(['guest'])
    ->name('register');
Route::post('/register', [RegisterController::class, 'create'])
    ->middleware(['guest'])
    ->name('register_create');

Route::get('/login', [LoginController::class, 'show'])
    ->middleware(['guest'])
    ->name('login');
Route::post('/login', [LoginController::class, 'create'])
    ->middleware(['guest'])
    ->name('login_create');
Route::get('/logout', [LoginController::class, 'destroy'])
    ->middleware(['auth'])
    ->name('logout');

Route::get('/sponsor', [SponsorController::class, 'show'])
    ->name('sponsor');
Route::post('/sponsor', [SponsorController::class, 'create'])
    ->name('sponsor_create');

Route::get('/discord', [DiscordController::class, 'redirect'])
    ->middleware(['auth']);
Route::get('/discord/callback', [DiscordController::class, 'callback'])
    ->middleware(['auth']);

if (App::environment('local')) {
    Route::get('/authn', function () {
        return dd(Auth::user());
    })->middleware(['auth']);
}
