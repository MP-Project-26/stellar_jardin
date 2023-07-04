<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table = 'blogs';
    protected $fillable = [
        'category_blog_id',
        'image',
        'title',
        'content',
    ];

    public function category_blog()
    {
        return $this->belongsTo(Category_blog::class, 'category_blog_id');
    }
}
