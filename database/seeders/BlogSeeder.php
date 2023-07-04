<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::table('blogs')->insert([
           'category_blog_id'=>'cat01',
           'image'=>'https://i.ibb.co/0jZ3qYH/1.jpg',
           'title'=>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
           'content'=>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
       ]);
    }
}
