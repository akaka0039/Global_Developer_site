<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Article; // モデル名を単数形の"Article"に修正

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            Article::create([ // モデル名を修正
                'user_id' => $i,
                'title' => 'Sample Article ' . $i,
                'content' => 'This is the content of sample article ' . $i,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
