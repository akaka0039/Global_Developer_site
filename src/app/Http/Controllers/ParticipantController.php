<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class ParticipantController extends Controller
{
    /**
     * Add participant to event.
     * @param int $eventId
     * @return Response|RedirectResponse
     */
    public function addParticipant(int $eventId)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $event = Event::find($eventId);
        if ($event->participants()->count() >= $event->participant_limit_number) {
            $event->waitList()->attach(auth()->id());
        } else {
            $event->participants()->attach(auth()->id());
        }

        return response()->json([
            'is_attended' => true,
            'participants' => $event->participants()->get(),
            'wait_list' => $event->waitList()->get(),
        ]);
    }

    /**
     * Remove participant from event.
     * @param int $eventId
     * @return JsonResponse|RedirectResponse
     */
    public function removeParticipant(int $eventId) : JsonResponse
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $event = Event::find($eventId);
        if ($event->isAttended(auth()->id())) {
            $event->participants()->detach(auth()->id());
        }
        // Check if there is a user on the wait_list
        $wait_list = $event->waitList();
        if ($wait_list->first() && !$event->isWaitListed(auth()->id())) {
            $first_wait_list = $wait_list->first();
            $event->participants()->attach($first_wait_list->user_id);
            $event->waitList()->detach($first_wait_list->user_id);
        } else {
            $event->waitList()->detach(auth()->id());
        }

        return response()->json([
            'is_attended' => false,
            'participants' => $event->participants()->get(),
            'wait_list' => $event->waitList()->get(),
        ]);
    }
}
