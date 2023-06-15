<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash; 

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table('users')->insert([
                'name' => 'User' . $i,
                'introduction' => 'Introduction' . $i,
                'image' => 'top_background.jpg',
                'habitation' => 'Habitation' . $i,
                'nationality' => 'Nationality' . $i,
                'position' => 'Position' . $i,
                'url' => 'example.com/user' . $i,
                'attendance_count' => $i,
                'email' => 'user'. $i . '@example.com',
                'password' => Hash::make('password' .$i),
                'email_verified_at' => now(),
                'remember_token' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
