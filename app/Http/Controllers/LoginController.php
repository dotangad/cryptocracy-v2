<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    $req->validate([
      'Email' => ['required', 'email'],
      'Password' => ['required'],
    ]);

    $body = $req->all();

    if (Auth::attempt([
      "email" => $body["Email"],
      "password" => $body["Password"]
    ])) {
      $req->session()->regenerate();

      return Redirect::route('index');
    }

    return Inertia::render('Login', ['failure' => true]);
  }

  public function destroy()
  {
    Auth::logout();
    return redirect('/');
  }
}
