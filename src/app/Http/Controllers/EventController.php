<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        if (Auth::check()) {
            return Inertia::render('Event/EventForm');
        } else {
            return redirect()->route('login'); 
        }
    }

    /**
     * @param StoreEventRequest $request
     * Store a newly created resource in storage.
     * 
     * columns
     * is_online '0' - in person
     * is_online '1' - online
     */
    public function store(StoreEventRequest $request)
    {
        $validated = $request->validated();
        $validated['image'] = $request->get('image') ?? $request->all()['image'];

        Event::create($validated);

        return redirect('/events')->with('message', 'Your event has been successfully created!');    
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        $is_attend = $event->isAttendedBy();
        $participants = $event->participants()->get();
        return Inertia::render('Event/EventDetail', compact(['event', 'is_attend', 'participants']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        return Inertia::render('Event/EventEdit', [
            'event' => [
                'name' => $event->name,
                'address' => $event->address,
                'participant_limit_number' => $event->participant_limit_number,
                'image' => $event->image,
                'start_date' => $event->start_date,
                'end_date' => $event->end_date,
                'description' => $event->description,
                'is_online' => $event->is_online,
                'user_id' => $event->user_id,
                'event_id' => $event->event_id
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreEventRequest $request, Event $event)
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
