<?php

use App\Http\Controllers\admin\BlogAdminController;
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

Route::get('products', [ProductController::class, 'index']);
Route::post('products', [BlogAdminController::class, 'store']);

Route::post('blogs', function (Request $request) {
    $data = $request->all();
    try {
        if ($data) {

            Blog::create([
                'title' => $data['title'],
                'author' => $data['author'],
                'image' => $data['image'],
                'content' => $data['content'],
                'tags' => $data['tags'],
                'comments' => [],
                'views' => 0,
            ]);
        }

        return response()->json(
            [
                'message' => 'Success',
                'status' => 200,
                'data' => $data
            ],
            200
        );
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Error',
            'status' => 500,
            'data' => $e->getMessage()
        ], 500);
    }
});
