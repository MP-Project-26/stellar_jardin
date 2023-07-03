<?php

namespace App\Http\Controllers;

use App\Models\Galleries;
use App\Models\Spesification;
use App\Http\Requests\StoreSpesificationRequest;
use App\Http\Requests\UpdateSpesificationRequest;
use Inertia\Inertia;

class SpesificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleries = Galleries::with('category')->get();

        return Inertia::render('Type_2', [
            'title' => 'Galleries',
            'galleries' => $galleries,
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
    public function store(StoreSpesificationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Spesification $spesification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Spesification $spesification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpesificationRequest $request, Spesification $spesification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Spesification $spesification)
    {
        //
    }
}
