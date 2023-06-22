<?php

namespace App\Models;

// for creating in the future
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Sanctum\HasApiTokens;

// for creating in the future
// class User extends Authenticatable implements MustVerifyEmail
class User extends Authenticatable 
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $primaryKey = 'user_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image',
        'position',
        'introduction',
        'habitation',
        'nationality',
        'url',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the events for the user.
     * @return HasMany
     */
    public function events(): HasMany
    {
        return $this->hasMany(Event::class, 'user_id');
    }

    /**
     * Get the participant events for the user.
     * @return BelongsToMany
     */
    public function participantEvents(): BelongsToMany
    {
        return $this->belongsToMany(Event::class, 'participants', 'user_id', 'event_id')->withTimestamps();;
    }
}
