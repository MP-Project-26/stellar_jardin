<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PemesananUnit extends Model
{
    use HasFactory;
    protected $table = 'pemesanan_units';

    protected $fillable = [
        'no_unit',
        'sistem_pengajuan',
        'nama_lengkap',
        'email',
        'no_wa',
        'alamat',
        'pesan',
    ];

}
