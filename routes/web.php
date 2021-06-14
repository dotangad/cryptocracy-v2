<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\RegisterController;
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

Route::get('/', [IndexController::class, 'show'])
    ->middleware(['guest'])
    ->name('index');
Route::get('/about', [IndexController::class, 'about_show'])
    ->middleware(['guest'])
    ->name('about');
Route::get('/leaderboard', [LeaderboardController::class, 'show'])
    ->name('leaderboard');

Route::get('/register', [RegisterController::class, 'show'])
    ->middleware(['guest'])
    ->name('register_show');

Route::get('/sponsor', [SponsorController::class, 'show'])
    ->middleware(['guest'])
    ->name('sponsor_show');
Route::post('/sponsor', [SponsorController::class, 'create'])
    ->middleware(['guest'])
    ->name('sponsor_create');
