<?php

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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

// Route::patch('blog', function (Request $request) {
//     $blog = Blog::first();

//     $blog->author = $request->author;
//     $blog->tags = $request->tags;

//     $blog->save();

//     return $blog;
// });

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

Route::post('blogs', function (Request $request) {
    $data = $request->all();
    try {
        if ($data) {
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
            Blog::create([
                'title' => $data['title'],
                'author' => $data['author'],
                'image' => $imageName,
                'content' => $data['content'],
                'tags' => $data['tags'],
                'comments' => [],
                'views' => 0,
            ]);

            Storage::disk('public')->put($imageName, file_get_contents($request->image));
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

Route::patch('update/blog/{id}', function (Request $request, $id) {
    $data = $request->all();
    try {
        if ($data) {
            $blog = Blog::find($id);
            $blog->update([
                'title' => $data['title'],
                'author' => $data['author'],
                'image' => $data['image'],
                'content' => $data['content'],
                'tags' => $data['tags'],
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
