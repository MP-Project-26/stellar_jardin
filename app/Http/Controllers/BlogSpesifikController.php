<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogSpesifikController extends Controller
{
    public function index($id)
    {
        $blogSpesifikall = Blog::find($id);
        return Inertia::render('blog/[...id]', [
            'blogSpesifik' => $blogSpesifikall
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $blog = Blog::find($id);
            if (!$blog) {
                return response()->json([
                    'message' => 'Blog Not Found.'
                ], 404);
            }

            // mengambil array sebelumnya dan menambahkan yang baru
            if ($blog->comments) {
                $getArraylatter = [...$blog->comments, $request->all()];


                $blog->update([
                    "comments" => $getArraylatter,
                ]);
            } else {
                $blog->update([
                    "comments" => [$request->all()],
                ]);
            }



            return response()->json([
                'message' => "success",
                'status' => true,
                'data' => $blog,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Terjadi kesalahan",
                "error" => $e->getMessage()
            ], 500);
        }
    }
}
