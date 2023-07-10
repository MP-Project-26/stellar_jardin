<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogContoller extends Controller
{
    public function index()
    {
        $data_blog = Blog::all();
        $all_data_blog = Blog::all();
        return Inertia::render('Blog', [
            'dataBlog' => $data_blog,
            'allDataBlog' => $all_data_blog
        ]);
    }

    // get tag from database
    public function getTag($slug)
    {

        $data_tag = Blog::whereJsonContains('tags', $slug)->get();
        $all_data_blog = Blog::all();
        return Inertia::render('blog/[...tag]', [
            'dataTag' => $data_tag,
            'allDataBlog' => $all_data_blog
        ]);
    }

    // search data
    public function search(Request $request)
    {
        // $data_blog = Blog::where('title', 'like', '%' . $request->search . '%')->get();
        $data_blog = Blog::where('title', 'like', '%' . $request->search . '%')->orWhere('author', 'like', '%' . $request->search . '%')->orWhere('content', 'like', '%' . $request->search . '%')->get();
        return response()->json([
            'message' => "success",
            'status' => true,
            'data' => $data_blog
        ], 200);
    }
}
