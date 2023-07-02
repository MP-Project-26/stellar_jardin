<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SimulasiKPRController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SimulasiKPR', [
            'title' => 'Simulasi KPR'
        ]);
    }

    public function simulateKPR(Request $request)
{

    $validatedData = $request->validate([
        'nilai_properti' => 'required|numeric|min:1',
        'persentase_uang_muka' => 'required|numeric|min:0|max:100',
        'suku_bunga' => 'required|numeric|min:0',
        'jangka_waktu' => 'required|numeric|min:1',
    ]);

    $nilaiProperti = $validatedData['nilai_properti'];
    $persentaseUangMuka = $validatedData['persentase_uang_muka'];
    $sukuBunga = $validatedData['suku_bunga'];
    $jangkaWaktu = $validatedData['jangka_waktu'];

    $uangMuka = ($persentaseUangMuka / 100) * $nilaiProperti;
    $pinjaman = $nilaiProperti - $uangMuka;
    $bungaPerBulan = ($sukuBunga / 100) / 12;
    $jumlahBulan = $jangkaWaktu * 12;

    $cicilanBulanan = ($pinjaman * $bungaPerBulan) / (1 - pow(1 + $bungaPerBulan, -$jumlahBulan));
    $totalPembayaran = $cicilanBulanan * $jumlahBulan;


    $cicilanBulananFormatted = 'Rp ' . number_format($cicilanBulanan, 0, ',', '.');
    $totalPembayaranFormatted = 'Rp ' . number_format($totalPembayaran, 0, ',', '.');

    return response()->json([
        'cicilan_bulanan' => $cicilanBulananFormatted,
        'total_pembayaran' => $totalPembayaranFormatted,
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
