<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function show(int $id): Response
    {
        $user = User::find($id);
        $organizing_events = $user->events()->get();
        $participating_events = $user->participantEvents()->get();
        return Inertia::render(
            'Profile/ProfileDetail',
            compact(
                'user',
                'organizing_events',
                'participating_events'
            )
        );
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/ProfileEdit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        $user->fill($request->validated());
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->image = $request->get('image') ? $request->get('image') : $request->all()['image'];
        $user->save();
        return Redirect::route('profile.edit')->with('message', 'Your account has been successfully edit!');
    }

    /**
     * Display the delete user form.
     */
    public function delete(Request $request): Response
    {
        return Inertia::render('Profile/DeleteUser', [
            'status' => session('status'),
        ]);

    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
