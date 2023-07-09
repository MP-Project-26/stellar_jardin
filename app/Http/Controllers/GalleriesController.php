<?php

namespace App\Http\Controllers;

use App\Models\Galleries;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($section)
    {

        $galleries = Galleries::with('category')->get();

        $idElement ='';
        if ($section){
            $idElement = $section;
        }else{
            $idElement = null;
        }

        return Inertia::render('Type', [
            'title' => 'Galleries',
            'galleries' => $galleries,
            'idElement' => $idElement,
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
    public function store(Request $request)
    {
        //
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
