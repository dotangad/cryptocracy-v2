<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class LoginController extends Controller
{
  public function show()
  {
    return Inertia::render('Login');
  }

  public function create(Request $req)
  {
    $body = $req->validate([
      'Email' => ['required', 'email'],
      'Password' => ['required'],
    ]);

    $user = User::where('email', $body['Email'])->first();
    if (!$user) {
      return Inertia::render('Login', ['failure' => 'User does not exist']);
    }

    if (!Hash::check($body['Password'], $user->password)) {
      return Inertia::render('Login', ['failure' => 'Incorrect password']);
    }

    $attempt = Auth::attempt([
      "email" => $body["Email"],
      "password" => $body["Password"]
    ], true);

    if ($attempt) {
      $req->session()->regenerate();

      return Redirect::route('index');
    }

    return Inertia::render('Login', ['failure' => 'Could not login, an error occurred']);
  }

  public function destroy(Request $request)
  {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/');
  }
}
