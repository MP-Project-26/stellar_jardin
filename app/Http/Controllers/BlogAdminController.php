<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogStoreRequest;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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

            // $request->image->move(public_path('assets/img/blog'), $imageName);
            Storage::disk('public')->put('assets/img/blog/' . $imageName, file_get_contents($request->image));

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
        // blog Detail 
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json([
                'message' => 'Blog Not Found.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'Blog' => $blog
        ], 200);
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
    public function update(BlogStoreRequest $request, $id)
    {
        try {
            $blog = Blog::find($id);
            if (!$blog) {
                return response()->json([
                    'message' => 'Blog Not Found.'
                ], 404);
            }

            $tagsToArray = explode(',', $request->tags);
            if ($request->image) {
                $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
                $blog->update([
                    "title" => $request->title,
                    "author" => $request->author,
                    "image" => "/storage/assets/img/blog/" . $imageName,
                    "content" => $request->content,
                    "tags" => $tagsToArray,
                ]);

                // remove old image
                if (Storage::disk('public')->exists('assets/img/blog/' . $blog->image)) {
                    Storage::disk('public')->delete('assets/img/blog/' . $blog->image);
                }
                // $request->image->move(public_path('assets/img/blog'), $imageName);
                Storage::disk('public')->put('assets/img/blog/' . $imageName, file_get_contents($request->image));
            } else {
                $blog->update([
                    "title" => $request->title,
                    "author" => $request->author,
                    "content" => $request->content,
                    "tags" => $tagsToArray,
                ]);
            }
            return response()->json([
                'message' => "success",
                'status' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Terjadi kesalahan",
                "error" => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $blog = Blog::find($id);
            if (!$blog) {
                return response()->json([
                    'message' => 'Blog Not Found.'
                ], 404);
            }

            // remove old image
            if (Storage::disk('public')->exists('assets/img/blog/' . $blog->image)) {
                Storage::disk('public')->delete('assets/img/blog/' . $blog->image);
            }

            $blog->delete();

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
}
