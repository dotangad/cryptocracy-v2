<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        /* Log::info($request->user()->only('createdAt')); */
        return array_merge(parent::share($request), [
            'dates' => [
                'start' => env('START_TIME'),
                'end' => env('END_TIME')
            ],

            'auth.user' => fn () => $request->user()
                ? $request->user()->only('username', 'email', 'name', 'company', 'phone', 'country')
                : null,

            'auth.user.created' => fn () => $request->user()
                ? \Carbon\Carbon::parse($request->user()->only('created_at')['created_at'])->diffForHumans()
                : null,

            'countries' => fn () => Config::get('countries')
        ]);
    }
}
