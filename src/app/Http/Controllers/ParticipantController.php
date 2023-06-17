<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class ParticipantController extends Controller
{
    /**
     * Add participant to event.
     * @param int $eventId
     * @return JsonResponse
     */
    public function addParticipant(int $eventId) : JsonResponse
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $event = Event::find($eventId);
        $event->participants()->attach(auth()->id());
        $participants = $event->participants()->get();

        return response()->json([
            'is_attended' => true,
            'participants' => $participants,
        ]);
    }

    /**
     * Remove participant from event.
     * @param int $eventId
     * @return JsonResponse
     */
    public function removeParticipant(int $eventId) : JsonResponse
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $event = Event::find($eventId);
        $event->participants()->detach(auth()->id());
        $participants = $event->participants()->get();

        return response()->json([
            'is_attended' => false,
            'participants' => $participants,
        ]);
    }
}
