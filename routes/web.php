<?php

use App\Http\Controllers\SimulasiKPRController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GalleriesController;
use App\Http\Controllers\SpesificationController;

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


Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/about', function () {
    return Inertia::render('About');
});


Route::get('/type', [GalleriesController::class, 'index']);
Route::get('/simulasi_kpr', [SimulasiKPRController::class, 'index']);
Route::post('/simulasi_kpr', [SimulasiKPRController::class, 'simulateKPR']);

Route::get('/type_2', [SpesificationController::class, 'index']);

Route::get('/blog', function () {
    return Inertia::render('Blog');
});
Route::get('/blog/spesifik/{id}', function () {
    return Inertia::render('blog/[...id]');
});
Route::get('/buy', function () {
    return Inertia::render('Buy');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// Route::get('welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

require __DIR__ . '/auth.php';
