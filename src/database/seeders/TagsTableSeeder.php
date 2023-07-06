<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'Java',
            'JavaScript',
            'TypeScript',
            'PHP',
            'Ruby',
            'Python',
            'Go',
            'C++',
            'C#',
            'Swift',
            'Kotlin',
            'SQL',
        ];
        foreach ($tags as $i => $tag) {
            DB::table('tags')->insert([
                'name' => json_encode(['en' => $tag]),
                'slug' => json_encode(['en' => $tag]),
            ]);
        }
    }
}
