<?php

use App\Http\Controllers\BlogAdminController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProductController;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('blog/{id}', [BlogAdminController::class, 'show']);
// Route::put('blogupdate/{id}', [BlogAdminController::class, 'update']);

Route::post('blog', function (Request $request) {
    $blog = Blog::first();
    $data = $request->all();

    if ($data) {

        for ($i = 0; $i < count($data); $i++) {
            $blog = Blog::create([
                'title' => $data[$i]['title'],
                'author' => $data[$i]['author'],
                'image' => $data[$i]['image'],
                'content' => $data[$i]['content'],
                'tags' => $data[$i]['tags'],
                'comments' => $data[$i]['comments'],
                'views' => $data[$i]['views'],
            ]);
        }
    }
    return $blog;
});
