<?php

namespace Database\Seeders;


use App\Models\Gallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'title' => 'exterior 1',
                'image' => 'eksterior_1.png',
                'category' => 'exterior',
                'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'exterior 2',
                'image' => 'eksterior_2.png',
                'category' => 'exterior',
                'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Site Plan 1',
                'image' => 'site_plan_1.png',
                'category' => 'exterior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Site Plan 2',
                'image' => 'site_plan_2.png',
                'category' => 'exterior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Site Plan 3',
                'image' => 'site_plan_3.png',
                'category' => 'exterior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),

            ],
            [
                'title' => 'Site Plan',
                'image' => 'main_site_plan.png',
                'category' => 'exterior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Living Romm 1',
                'image' => 'living_room_1.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Living Romm 2',
                'image' => 'living_room_2.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Living Romm 3',
                'image' => 'living_room_3.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Master Bed Room 1',
                'image' => 'master_bed_room_1.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Master Bed Room 2',
                'image' => 'master_bed_room_2.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Master Bed Room 3',
                'image' => 'master_bed_room_3.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Master Bed Room 4',
                'image' => 'master_bed_room_4.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Bed Room 1',
                'image' => 'master_bed_room_1.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Bed Room 2',
                'image' => 'master_bed_room_2.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Dining Room 1',
                'image' => 'dining_room_1.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Dining Room 2',
                'image' => 'dining_room_2.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Kitchen Room 1',
                'image' => 'kitchen_room_1.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Kitchen Room 2',
                'image' => 'kitchen_room_2.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Backyard',
                'image' => 'backyard.jpg',
                'category' => 'interior',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Potongan Samping Kiri 1',
                'image' => 'potongan_kiri_1.jpg',
                'category' => 'potongan',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Potongan Samping Kiri 2',
                'image' => 'potongan_kiri_2.jpg',
                'category' => 'potongan',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Potongan Samping Kanan 1',
                'image' => 'potongan_kanan_1.jpg',
                'category' => 'potongan',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'title' => 'Potongan Samping Kanan 2',
                'image' => 'potongan_kanan_2.jpg',
                'category' => 'potongan',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],

        ];
        Gallery::insert($data);
    }
}
