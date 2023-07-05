<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'author',
        'image',
        'content',
        'tags',
        'comments',
        'views',
    ];

    protected $casts = [
        'tags' => 'array',
        'comments' => 'array',
    ];

    



    // public function category_blog()
    // {
    //     return $this->belongsTo(Category_blog::class, 'category_blog_id');
    // }
}
