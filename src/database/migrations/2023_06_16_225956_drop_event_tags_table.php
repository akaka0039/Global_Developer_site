
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('event_tags');
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('event_tags', function (Blueprint $table) {
            $table->id('event_tags_id');
            $table->foreignId('event_id')->constrained('events', 'event_id');
            $table->foreignId('tag_id')->constrained('tags', 'tag_id');
            $table->timestamps();
        });
    }
};
