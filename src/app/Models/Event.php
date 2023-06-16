<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $primaryKey = 'event_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'address',
        'participant_limit_number',
        'image',
        'description',
        'start_date',
        'end_date',
        'is_online',
        'user_id',
    ];

    /**
     * Get the user that owns the event.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'event_id');
    }

    /**
     * Get the participants for the event.
     * @return BelongsToMany
     */
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'participants', 'event_id', 'user_id',)->withTimestamps();
    }

    /**
     * Check if the event is attended by the user.
     * @return bool
     */
    public function isAttended(): bool
    {
        if (!auth()->check() && is_null(auth()->user())) {
            return false;
        }

        return $this->participants->contains(auth()->user());
    }
}