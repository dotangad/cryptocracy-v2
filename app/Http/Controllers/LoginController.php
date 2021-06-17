<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
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

    $attempt = Auth::attempt([
      "email" => $body["Email"],
      "password" => $body["Password"]
    ]);

    if ($attempt) {
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
