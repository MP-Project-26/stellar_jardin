<?php

namespace App\Http\Controllers;

use App\Models\PemesananUnit;
use Illuminate\Http\Request;
use Inertia\Inertia;
use GuzzleHttp\Client;

class PemesananUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PemesananUnit', [
            'title' => 'Pemesanan Unit'
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
        //handel request
        $request->validate([
            'no_unit' => 'required',
            'sistem_pengajuan' => 'required',
            'nama_lengkap' => 'required',
            'email' => 'required',
            'no_wa' => 'required',
            'alamat' => 'required',
            'pesan' => 'required',
        ]);

        //store data
        PemesananUnit::create([
            'no_unit' => $request->no_unit,
            'sistem_pengajuan' => $request->sistem_pengajuan,
            'nama_lengkap' => $request->nama_lengkap,
            'email' => $request->email,
            'no_wa' => $request->no_wa,
            'alamat' => $request->alamat,
            'pesan' => $request->pesan,
        ]);

        

        //return message
        return response()->json([
            'message' => 'Pemesanan Unit Berhasil, anda akan segera dihubungi oleh tim marketing kami',
        ]);


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
