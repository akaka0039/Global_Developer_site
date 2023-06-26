<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ParticipantController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Top page
Route::get('/', function () {
    return Inertia::render('Top/Index');
});

// Events
Route::resource('events', EventController::class);

// Users
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/profile/{user_id}', [ProfileController::class, 'show'])->name('profile.show');

// Participants
Route::post('events/{eventId}/participants', [ParticipantController::class, 'addParticipant']);
Route::delete('events/{eventId}/participants', [ParticipantController::class, 'removeParticipant']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// contact page
Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
});

/*
    Reference
*/
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('/welcome', function () {
//     return view('welcome');
// });

/*
    2023/6/9
    we are planing to make those services
*/
// Route::get('/article', [ArticleController::class, 'index'])
//     ->name('article');
// Route::get('/project', function () {
//         return Inertia::render('Project/Index');
//     });
// Route::get('/member', function () {
//     return Inertia::render('Member/Index');
// });


require __DIR__.'/auth.php';
