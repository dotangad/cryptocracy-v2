<?php

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

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

/* Route::get('/leaderboard', function () { */
/*     $faker = Faker\Factory::create(); */
/*     $users = []; */

/*     for ($i = 0; $i < 100; $i++) { */
/*         $users[$i] = [ */
/*             'rank' => $i + 1, */
/*             'username' => $faker->username() */
/*         ]; */
/*     } */

/*     return Inertia::render('Leaderboard', ['users' => $users]); */
/* }); */

Route::get('/leaderboard', function () {
    return Inertia::render('ComingSoon', ['title' => "Leaderboard"]);
});

Route::get('/register', function () {
    return Inertia::render('ComingSoon', ['title' => "Register"]);
});

Route::get('/sponsor', function () {
    return Inertia::render('SponsorUs');
});
