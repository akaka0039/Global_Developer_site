<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;

class RegisteredConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The attributes that should be cast.
     *
     * @var Request
     */
    protected $request;

    /**
     * Create a new message instance.
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
    * Get the message envelope.
    *
    * @return \Illuminate\Mail\Mailables\Envelope
    */
    public function envelope()
    {
        $envelope = new Envelope();

        return $envelope->subject('Your email address has been registered')
            // Sender's e-mail address
            ->from('foo@example.net')
            ->to($this->request->email);
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $contact = new Content();
        return $contact->markdown('emails.registered_confirmation_mail')->with([
            'name' => $this->request->name,
            'email' => $this->request->email
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
