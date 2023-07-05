<?php

namespace Database\Seeders;

use App\Models\Blog;
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
            [
                "title" => "Manage House Property",
                "author" => "Fikri",
                "image" => './assets/img/blog/ourblog1-1.png',
                // "tags" => ["Home", "Furniture"],
                "content" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius veritatis velit veniam ipsum amet, laborum quaerat voluptates, et repellendus laudantium quos incidunt officiis minus animi sequi tempore hic, atque dicta maxime sint eum consequuntur! Magnam exercitationem odit laboriosam fuga dolore neque impedit necessitatibus repellat cum repellendus, illum eius, atque obcaecati voluptas. Assumenda quidem ad nulla quos, nesciunt accusamus quod voluptates repudiandae eum deleniti at molestiae incidunt obcaecati reprehenderit, est impedit. Ipsam eveniet tempora sint voluptatibus beatae architecto consequatur, facilis aperiam ullam quae veritatis, aliquid impedit ratione adipisci nam iste deserunt. Minima officiis ad aperiam quia molestias ipsa ea voluptate.",
                "views" => 100,
                // "comments" => ["lorem", "ipsum", "dolor"],
            ],
        ]);
    }
}
