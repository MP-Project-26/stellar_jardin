<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories_galleries extends Model
{
    use HasFactory;

    public function galleries()
    {
        return $this->hasMany(Galleries::class);
    }
}
