<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BlogContoller;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GalleriesController;
use App\Http\Controllers\SimulasiKPRController;

use App\Http\Controllers\PemesananUnitController;

use App\Http\Controllers\admin\BlogAdminController;
use App\Http\Controllers\OrderManagementController;

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






Route::get('/about', function () {
    return Inertia::render('About');
});


Route::get('/type', [GalleriesController::class, 'index']);
Route::get('/type/{section}', [GalleriesController::class, 'index']);
Route::get('/simulasi_kpr', [SimulasiKPRController::class, 'index']);
Route::post('/simulasi_kpr', [SimulasiKPRController::class, 'simulateKPR']);
Route::get('/', [HomeController::class, 'index']);
Route::get('/pemesanan_unit', [PemesananUnitController::class, 'index']);
Route::post('/pemesanan_unit', [PemesananUnitController::class, 'store']);


Route::get('/admin/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/admin/user', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('user');
Route::post('/admin/user', [UserController::class, 'store'])->name('createUser');
Route::get('/admin/contact', [ContactController::class, 'index'])->middleware(['auth', 'verified'])->name('contact');

Route::get('/admin/blog', [BlogAdminController::class, 'index'])->middleware(['auth', 'verified'])->name('blog');
Route::post('/admin/blog', [BlogAdminController::class, 'store'])->middleware(['auth', 'verified'])->name('createBlog');
Route::get('/admin/blog/{id}', [BlogAdminController::class, 'show'])->middleware(['auth', 'verified'])->name('showBlog');
Route::put('/admin/blog/edit/{id}', [BlogAdminController::class, 'update'])->middleware(['auth', 'verified'])->name('updateBlog');
Route::delete('/admin/blog/delete/{id}', [BlogAdminController::class, 'destroy'])->middleware(['auth', 'verified'])->name('deleteBlog');



Route::get('/admin/content', [ContentController::class, 'index'])->middleware(['auth', 'verified'])->name('content');
Route::post('/admin/content/store', [ContentController::class, 'store'])->middleware(['auth', 'verified'])->name('store_galleries');
Route::get('/admin/content/search', [ContentController::class, 'search'])->middleware(['auth', 'verified'])->name('show_galleries');
Route::get('/admin/content/edit/{id}/{paging}', [ContentController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit_galleries');
Route::post('/admin/content/update/{id}', [ContentController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('update_galleries');
Route::delete('/admin/content/delete/{id}', [ContentController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('delete_galleries');


Route::get('/admin/order', [OrderManagementController::class, 'index'])->middleware(['auth', 'verified'])->name('orderManagement');
Route::post('/admin/tambah_pesanan', [OrderManagementController::class, 'store'])->middleware(['auth', 'verified'])->name('tambah_pesanan');


Route::get('/blog', [BlogContoller::class, 'index']);
Route::post('/blog/search', [BlogContoller::class, 'search']);
Route::get('/blog/tag/{slug}', [BlogContoller::class, 'getTag']);
Route::get('/blog/spesifik/{id}', [BlogSpesifikController::class, 'index']);
Route::put('/blog/comment/{id}', [BlogSpesifikController::class, 'update']);
Route::put('/blog/view/{id}', [BlogSpesifikController::class, 'updateViews']);

Route::get('/buy', function () {
    return Inertia::render('Buy');
});
Route::get('/cba', function () {
    return Inertia::render('blog/cba');
});


// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
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
