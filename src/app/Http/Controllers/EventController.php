<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\StoreEventRequest;
use App\Models\Event;
use Spatie\Tags\Tag;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    /**
     * Display a listing of the events.
     * @return Response
     */
    public function index(): Response
    {
        $events = Event::orderBy('created_at', 'desc')->get();
        return Inertia::render('Main/Index', compact('events'));
    }

    /**
     * Show the form for creating a new event.
     * @return Response|RedirectResponse
     */
    public function create(): Response|RedirectResponse
    {
        if (Auth::check()) {
            $tags = Tag::orderBy('created_at', 'desc')->get();
            return Inertia::render('Event/EventForm', compact('tags'));
        } else {
            return redirect()->route('login');
        }
    }

    /**
     * Store a newly created event in storage.
     * @param StoreEventRequest $request
     * @return RedirectResponse
     *
     * columns
     * is_online '0' - in person
     * is_online '1' - online
     */
    public function store(StoreEventRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();
            $validated['image'] = $request->get('image') ?? $request->all()['image'];
            $event = Event::create($validated);
            // attach tags
            if ($validated['tags']) {
                $event->attachTags($validated["tags"]);
            }
        });

        return redirect('/events')->with('message', 'Your event has been successfully created!');
    }

    /**
     * Display the specified event.
     * @param Event $event
     * @return Response
     */
    public function show(Event $event): Response
    {
        $is_attended = $event->isAttendedBy();
        $participants = $event->participants()->get();
        $tags = $event->tags()->get();
        return Inertia::render(
            'Event/EventDetail',
            compact(
                [
                    'event',
                    'is_attended',
                    'participants',
                    'tags'
                ]
            )
        );
    }

    /**
     * Show the form for editing the specified event.
     * @param Event $event
     * @return Response
     */
    public function edit(Event $event): Response
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
     * Update the specified event in storage.
     * @param StoreEventRequest $request
     * @param Event $event
     * @return RedirectResponse
     */
    public function update(StoreEventRequest $request, Event $event): RedirectResponse
    {
        $event->update($request->validated());

        return to_route('events.index');
    }

    /**
     * Remove the specified event from storage.
     * @param Event $event
     * @return RedirectResponse
     */
    public function destroy(Event $event): RedirectResponse
    {
        $event->delete();

        return to_route('events.index');
    }
}
