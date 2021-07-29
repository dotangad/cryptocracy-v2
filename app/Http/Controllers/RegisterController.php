<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserTile;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function show()
    {
        return Inertia::render('Register', [
            'countries' => Config::get('countries')
        ]);
    }

    public function create(Request $req)
    {
        $countries = Config::get('countries');
        $req->validate([
            'Name' => ['required'],
            'Email' => ['required', 'email', 'unique:users,email'],
            'Username' => ['required', 'unique:users,username', 'alpha_num', 'max:32'],
            'Institution' => ['required'],
            'Password' => ['required'],
            'Password confirmation' => ['same:Password'],
            'Country' => ['required', Rule::in(array_keys($countries))],
            'Phone' => ['required', 'regex:/^\+[\d\ ?\-?]+$/m'],
            'referral_code' => 'nullable|regex:/^[A-Z0-9]+$/|exists:users,referral_code',
            'recaptcha' => ['required', new Recaptcha(request()->ip())]
        ]);

        $body = $req->all();

        $referred_by = null;
        if ($body['referral_code']) {
            $ref_user = User::where('referral_code', $body['referral_code'])->get();
            if ($ref_user->count() > 0) {
                $referred_by = $ref_user->first()->id;
            }
        }

        $user = new User();
        $user->name = $body['Name'];
        $user->email = $body['Email'];
        $user->username = $body['Username'];
        $user->password = Hash::make($body['Password']);
        $user->country = $body['Country'];
        $user->phone = $body['Phone'];
        $user->company = $body['Institution'];
        $user->tile_id = 1;
        $user->referred_by = $referred_by;
        $user->save();

        $user_tile = new UserTile();
        $user_tile->tile_id = 1;
        $user_tile->user_id = $user->id;
        $user_tile->ip = $req->ip();
        $user_tile->save();

        Auth::login($user, true);

        return redirect('/');
    }
}
