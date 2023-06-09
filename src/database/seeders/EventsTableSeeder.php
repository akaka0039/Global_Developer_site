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
                'address' => 'Example Address',
                'image' => '/images/top_background.jpg',
                'description' => 'Example description ' . $i,
                'name' => 'event_name' . $i,
                'limitMember' => '10',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
