<?php

namespace Database\Seeders;



use App\Models\Galleries;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GalleriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'category_gallery_id' => 1,
                'title' => 'exterior 1',
                'image' => 'eksterior_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 1,
                'title' => 'exterior 2',
                'image' => 'eksterior_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 1,
                'title' => 'Site Plan 1',
                'image' => 'site_plan_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 1,
                'title' => 'Site Plan 2',
                'image' => 'site_plan_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 1,
                'title' => 'Site Plan 3',
                'image' => 'site_plan_3.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),

            ],
            [
                'category_gallery_id' => 1,
                'title' => 'Site Plan',
                'image' => 'main_site_plan.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Living Romm 1',
                'image' => 'living_room_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Living Romm 2',
                'image' => 'living_room_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Living Romm 3',
                'image' => 'living_room_3.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Master Bed Room 1',
                'image' => 'master_bed_room_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Master Bed Room 2',
                'image' => 'master_bed_room_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Master Bed Room 3',
                'image' => 'master_bed_room_3.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Master Bed Room 4',
                'image' => 'master_bed_room_4.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Bed Room 1',
                'image' => 'master_bed_room_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Bed Room 2',
                'image' => 'master_bed_room_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Dining Room 1',
                'image' => 'dining_room_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Dining Room 2',
                'image' => 'dining_room_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Kitchen Room 1',
                'image' => 'kitchen_room_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Kitchen Room 2',
                'image' => 'kitchen_room_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 2,
                'title' => 'Backyard',
                'image' => 'backyard.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 3,
                'title' => 'Potongan Samping Kiri 1',
                'image' => 'potongan_kiri_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 3,
                'title' => 'Potongan Samping Kiri 2',
                'image' => 'potongan_kiri_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 3,
                'title' => 'Potongan Samping Kanan 1',
                'image' => 'potongan_kanan_1.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 3,
                'title' => 'Potongan Samping Kanan 2',
                'image' => 'potongan_kanan_2.jpg',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 4,
                'title' => 'Denah Lantai 1',
                'image' => 'denah_lantai_1.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'category_gallery_id' => 4,
                'title' => 'Denah Lantai 2',
                'image' => 'denah_lantai_2.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],

        ];
        Galleries::insert($data);
    }
}
