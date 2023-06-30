<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galleries extends Model
{
    use HasFactory;
    protected $table = 'galleries';
    protected $fillable = [
        'category_gallery_id',
        'image',
        'title',
    ];

    public function category()
    {
        return $this->belongsTo(Categories_galleries::class, 'category_gallery_id');
    }
}
