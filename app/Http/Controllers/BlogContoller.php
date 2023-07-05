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
        return Inertia::render('Blog', [
            'dataBlog' => $data_blog
        ]);
    }
}