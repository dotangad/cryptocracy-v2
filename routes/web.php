<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DiscordController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PlayController;
use App\Http\Controllers\ReferralController;
use App\Http\Controllers\ShortlinkController;
use App\Http\Controllers\TileController;
use App\Http\Controllers\UserController;
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
    ->middleware(['dq'])
    ->name('index');
Route::get('/about', [IndexController::class, 'about'])
    ->middleware(['dq'])
    ->name('about');
Route::get('/dq', [IndexController::class, 'dq'])
    ->middleware(['auth'])
    ->name('dq');

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

Route::get('/connectdiscord', [DiscordController::class, 'redirect'])
    ->middleware(['auth']);
Route::get('/connectdiscord/callback', [DiscordController::class, 'callback'])
    ->middleware(['auth']);

Route::get('/admin', [AdminController::class, 'show'])
    ->middleware(['auth', 'admin'])
    ->name('admin');

Route::resource('/admin/notifications', NotificationController::class)
    ->only(['index', 'store', 'show', 'update', 'destroy'])
    ->middleware(['auth', 'admin']);

Route::resource('/admin/shortlinks', ShortlinkController::class)
    ->only(['index', 'store', 'destroy'])
    ->middleware(['web', 'auth', 'admin']);

Route::get('/admin/users', [UserController::class, 'index'])
    ->middleware(['auth', 'admin'])
    ->name('users.index');

Route::get('/admin/users/{user}', [UserController::class, 'show'])
    ->middleware(['auth', 'admin'])
    ->name('users.show');

Route::post('/admin/users/{user}/admin', [UserController::class, 'admin'])
    ->middleware(['auth', 'admin'])
    ->name('users.admin');

Route::post('/admin/users/{user}/dq', [UserController::class, 'disqualify'])
    ->middleware(['auth', 'admin'])
    ->name('users.disqualify');

Route::post('/admin/users/{user}/pwd', [UserController::class, 'change_pwd'])
    ->middleware(['auth', 'admin'])
    ->name('users.disqualify');

Route::post('/admin/users/{user}/recal', [UserController::class, 'recalibrate_points'])
    ->middleware(['auth', 'admin'])
    ->name('users.recalibrate_points');

Route::get('/admin/users/{user}/tile/{tile}', [UserController::class, 'user_tile'])
    ->middleware(['auth', 'admin'])
    ->name('users.user_tile');

Route::post('/admin/users/{user}/tile/{tile}/sq', [UserController::class, 'sidequest_points'])
    ->middleware(['auth', 'admin'])
    ->name('users.sidequest_points');

Route::get('/admin/tiles', [TileController::class, 'index'])
    ->middleware(['auth', 'admin'])
    ->name('tiles.index');

Route::get('/admin/tiles/{tile}', [TileController::class, 'show'])
    ->middleware(['auth', 'admin'])
    ->name('tiles.show');

Route::post('/admin/tiles/{tile}', [TileController::class, 'edit'])
    ->middleware(['auth', 'admin'])
    ->name('tiles.show');

Route::get('/play', [PlayController::class, 'show'])
    ->middleware(['auth', 'dq', 'inprogress'])
    ->name('play');

Route::post('/play/back', [PlayController::class, 'back'])
    ->middleware(['auth', 'dq', 'inprogress'])
    ->name('play.back');

Route::post('/play/next', [PlayController::class, 'next'])
    ->middleware(['auth', 'dq', 'inprogress'])
    ->name('play.next');

Route::post('/play/try', [PlayController::class, 'try'])
    ->middleware(['auth', 'dq', 'inprogress'])
    ->name('play.try');

Route::post('/referral/set', [ReferralController::class, 'set_referral_code'])
    ->middleware(['auth', 'dq'])
    ->name('referral.set');

Route::get('/{shortlink:shortlink}', [ShortlinkController::class, 'redirect'])->where('shortlink', '.*');

if (App::environment('local')) {
    Route::get('/authn', function () {
        return dd(Auth::user());
    })->middleware(['auth']);
}
