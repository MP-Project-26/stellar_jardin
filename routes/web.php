<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\DashboardController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GalleriesController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;

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
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/about', function () {
    return Inertia::render('About');
});


Route::get('/type', [GalleriesController::class, 'index']);

Route::get('/admin/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/admin/user', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('user');
Route::get('/admin/contact', [ContactController::class, 'index'])->middleware(['auth', 'verified'])->name('contact');
Route::get('/admin/blog', [BlogController::class, 'index'])->middleware(['auth', 'verified'])->name('blog');
Route::get('/admin/content', [ContentController::class, 'index'])->middleware(['auth', 'verified'])->name('content');



Route::get('/blog', function () {
    return Inertia::render('Blog');
});
Route::get('/blog/spesifik/{id}', function () {
    return Inertia::render('blog/[...id]');
});
Route::get('/buy', function () {
    return Inertia::render('Buy');
});


Route::middleware('auth')->group(function () {
    Route::get('admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('admin/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

require __DIR__ . '/auth.php';
