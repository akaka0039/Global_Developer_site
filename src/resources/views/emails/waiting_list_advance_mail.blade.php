<x-mail::message>
# Great news! You were added a event!:
## Dear {{ $name }}
<br>
    You were added to the following class
<br>
    event name: {{ $event_name }}
<br>
    start date: {{ $event_start_date }}
<br>
    end date: {{ $event_end_date }}
<br>

<x-mail::button url="{{ route('events.show', ['event' => $event]) }}">
    Check the event
</x-mail::button>

Thanks<br>

</x-mail::message>
