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
        $event = new Event();

        // if image is there
        if ($request->hasFile('image')) {
            $original = $request->file('image')->getClientOriginalName();
            $name = date('Ymd_His') . '_' . $original;
            $request->file('image')->move('storage/images', $name);
            $event->image = $name;
        } else {
            // default
            $event->image = 'top_background.jpg'; 
        }

        $event->user_id = $request->input('user_id');
        $event->name = $request->input('name');
        $event->start_date = $request->input('start_date');
        $event->end_date = $request->input('end_date');
        $event->address = $request->input('address');
        $event->participant_limit_number = $request->input('participant_limit_number');
        $event->description = $request->input('description');
        $event->is_online = $request->input('is_online');
        $event->save();

        return redirect('/events')->with('message', 'Your event has been successfully created!');    
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
