<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ParticipantController extends Controller
{
    public function addParticipant(Request $request, $eventId)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $event = Event::find($eventId);
        $event->participants()->attach(auth()->id());
        $participants = $event->participants()->get();
        $is_attend = true;

        return Inertia::render('Event/EventDetail', compact(['event', 'is_attend', 'participants']));
    }

    public function removeParticipant(Request $request, $eventId)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $event = Event::find($eventId);
        $event->participants()->detach(auth()->id());
        $participants = $event->participants()->get();
        $is_attend = false;

        return Inertia::render('Event/EventDetail', compact(['event', 'is_attend', 'participants']));
    }
}
