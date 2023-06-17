<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash; 

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table('tags')->insert([
                'name' => json_encode(['en' => 'tag-' . $i]),
                'slug' => json_encode(['en' => 'tag-' . $i]),
            ]);
        }
    }
}
