<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table('events')->insert([
                'user_id' => $i,
                'name' => 'event_name' . $i,
                'start_date' => '2024-06-12 19:28:01',
                'end_date' => '2024-06-13 19:28:01',
                'address' => 'Example Address' . $i,
                'image' => 'top_background.jpg',
                'description' => 'Example description ' . $i,
                'participant_limit_number' => $i,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
