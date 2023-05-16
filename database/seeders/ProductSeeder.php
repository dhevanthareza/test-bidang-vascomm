<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->insert([
            [
                'name' => "Wallnut",
                'price' => 100000,
                'photo' => "uploads/646236200f2322.31858218.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Ovomaltine",
                'price' => 200000,
                'photo' => "uploads/646237513cda30.27521093.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Wallnut 2",
                'price' => 100000,
                'photo' => "uploads/646236200f2322.31858218.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Ovomaltine 2",
                'price' => 200000,
                'photo' => "uploads/646237513cda30.27521093.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Wallnut 3",
                'price' => 100000,
                'photo' => "uploads/646236200f2322.31858218.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Ovomaltine 3",
                'price' => 200000,
                'photo' => "uploads/646237513cda30.27521093.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Wallnut 4",
                'price' => 100000,
                'photo' => "uploads/646236200f2322.31858218.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Ovomaltine 4",
                'price' => 200000,
                'photo' => "uploads/646237513cda30.27521093.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Wallnut 5",
                'price' => 100000,
                'photo' => "uploads/646236200f2322.31858218.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Ovomaltine 5",
                'price' => 200000,
                'photo' => "uploads/646237513cda30.27521093.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Wallnut 6",
                'price' => 100000,
                'photo' => "uploads/646236200f2322.31858218.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
            [
                'name' => "Ovomaltine 6",
                'price' => 200000,
                'photo' => "uploads/646237513cda30.27521093.jpg",
                'description' => "Lorem ipsum dolor sit amet consectetur",
                'created_at' => '2023-05-15 13:39:44',
                'updated_at' => '2023-05-15 13:39:44'
            ],
        ]);
    }
}
