<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TypeController extends Controller
{
    //
    public function index()
    {
        $gallery = Gallery::all();
        return Inertia::render('Type', [
            'gallery' => $gallery,
        ]);
    }
}
