<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WaitingListAdvanceMail extends Mailable
{
    use Queueable, SerializesModels;

    /** @var User **/
    protected $user;
    /** @var Event **/
    protected $event;

    /**
     * Create a new message instance.
     * @param Event $event
     * @param User $user
     * @return void
     */
    public function __construct($event, $user)
    {
        $this->event = $event;
        $this->user = $user;
    }

    /**
    * Get the message envelope.
    * @return Envelope
    */
    public function envelope(): Envelope
    {
        $envelope = new Envelope();

        return $envelope->subject('You were added to a event!')
            ->from('foo@example.net')
            ->to($this->user->email);
    }

    /**
     * Get the message content definition.
     * @return Content
     */
    public function content(): Content
    {
        $contact = new Content();
        return $contact->markdown('emails.waiting_list_advance_mail')->with([
            'name' => $this->user->name,
            'email' => $this->user->email,
            'event_name' => $this->event->name,
            'event_start_date' => $this->event->start_date,
            'event_end_date' => $this->event->end_date,
            'event' => $this->event,
        ]);
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
