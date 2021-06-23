<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NotificationController extends Controller
{
    /**
     * Get all notifications
     */
    public static function format_notifications()
    {
        return Notification::orderBy('created_at', 'DESC')
            ->get(['id', 'content', 'created_at'])
            ->map(function ($item) {
                return [
                    'id' => $item['id'],
                    'content' => $item['content'],
                    'created_at' => $item['created_at']->diffForHumans()
                ];
            });
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Notifications', [
            'notifications' => $this->format_notifications()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'content' => 'required'
        ]);

        $notif = new Notification();
        $notif->content = $data['content'];
        $notif->save();

        return Redirect::route('notifications.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function show(Notification $notification)
    {
        return Inertia::render('Admin/Notification', [
            'notification' => [
                'id' => $notification->id,
                'content' => $notification->content,
                'created_at' => $notification->created_at->diffForHumans()
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function edit(Notification $notification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notification $notification)
    {
        $data = request()->validate([
            'content' => 'required'
        ]);

        $notification->content = $data['content'];
        $notification->save();

        return redirect()->route('notifications.show', $notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notification $notification)
    {
        $notification->delete();
        return Redirect::route('notifications.index');
    }
}
