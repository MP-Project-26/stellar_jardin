<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogStoreRequest;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BlogAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dataBlog = Blog::all();
        return Inertia::render('admin/blog/Index', [
            'dataBlog' => $dataBlog
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BlogStoreRequest $request)
    {
        try {
            $tagsToArray = explode(',', $request->tags);
            $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();

            Blog::create([
                "title" => $request->title,
                "author" => $request->author,
                "image" => $imageName,
                "content" => $request->content,
                "tags" => $tagsToArray,
                "comments" => '',
                "views" => 0,
            ]);

            $request->image->move(public_path('images'), $imageName);

            return response()->json([
                'message' => "success",
                'status' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Terjadi kesalahan"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
