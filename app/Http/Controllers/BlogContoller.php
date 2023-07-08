<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogContoller extends Controller
{
    public function index()
    {
        $data_blog = Blog::paginate(5);
        return Inertia::render('Blog', [
            'dataBlog' => $data_blog,
        ]);
    }

    // get tag from database
    public function getTag($slug)
    {
        // get tag from database
        $data_tag = Blog::select('tags')->get();
        // value data tags in array
        $data_tag = $data_tag->pluck('tags')->toArray();
        
        return Inertia::render('blog/[...tag]', [
            'dataTag' => $data_tag,
            'slug' => $slug
        ]);
    }
}
