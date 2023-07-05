<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\BlogUpdateRequest;
use App\Models\Blog;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BlogAdminController extends Controller
{
    public function index()
    {
        $dataBlog = Blog::all();
        return Inertia::render('admin/blog/Index', [
            'dataBlog' => $dataBlog
        ]);
    }

    // public function create(Request $request)
    // {
    //     $request->validate([
    //         'title' => 'required|string|distinct',
    //         'author' => 'required|string',
    //         'image' => 'required|string',
    //         'content' => 'required|string|distinct',
    //         'tags' => 'required|array|distinct',
    //         'views' => 'string',
    //         'link' => 'required|string|distinct',
    //     ]);

    //     $blog = Blog::create([
    //         'title' => $request->title,
    //         'author' => $request->author,
    //         'image' => $request->image,
    //         'content' => $request->content,
    //         'tags' => $request->tags,
    //     ]);

    //     if ($blog) {
    //         return back()->with('success', 'Data berhasil ditambahkan');
    //     } else {
    //         return back()->with('error', 'Data gagal ditambahkan');
    //     }
    // }

    public function store(BlogUpdateRequest $request): RedirectResponse
    {

        $blog = Blog::create([
            'title' => $request->title,
            'author' => $request->author,
            'image' => $request->image,
            'content' => $request->content,
            'tags' => $request->tags,
        ]);

        if ($blog) {
            return Redirect::route('createBlog')->with('success', 'Data berhasil ditambahkan');
        } else {
            return Redirect::route('createBlog')->with('gagal', 'Gagal berhasil ditambahkan');
        }
    }
}
