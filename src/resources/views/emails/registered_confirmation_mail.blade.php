<x-mail::message>
# Your email address has been registered
## Dear {{ $name }}
<br>
    Your email address has been registered as the following information:
<br>
    name: {{ $name }}
<br>
    email: {{ $email }}
<br>

<x-mail::button url="{{ route('events.index') }}">
    Check events
</x-mail::button>

Thanks<br>

</x-mail::message>

