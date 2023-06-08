<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreEventRequest;
use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::orderBy('created_at', 'desc')->get();
        return Inertia::render('Main/Index', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Event/EventForm');
    }

    /**
     * @param StoreEventRequest $request
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        Event::create($request->validated());

        return to_route('events.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return Inertia::render('Event/EventDetail', compact('event'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(StoreEventRequest $event)
    {
        return Inertia::render('Event/EventEdit', [
            'event' => [
                'name' => $event->name,
                'limitMember' => $event->limitMember,
                'address' => $event->address,
                'participant_limit_number' => $event->participant_limit_number,
                'image' => $event->image,
                'description' => $event->description,
                'is_online' => $event->is_online,
                'user_id' => $event->user_id
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        $event->update($request->validated());

        return to_route('events.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return to_route('events.index');
    }
}
