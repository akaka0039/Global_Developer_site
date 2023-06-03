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
        Schema::table('events', function (Blueprint $table) {
            $table->string('name')->after('user_id');
            $table->integer('participant_limit_number')->default(0)->after('address');
            $table->boolean('is_online')->default(false)->after('description');
            $table->string('address')->nullable()->change();
            $table->renameColumn('imagePath', 'image');
        });
        Schema::table('events', function (Blueprint $table) {
            $table->string('image')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('event_name');
            $table->dropColumn('participant_limit_number');
            $table->dropColumn('is_online');
            $table->string('address')->change();
            $table->renameColumn('image', 'imagePath');
        });
        Schema::table('events', function (Blueprint $table) {
            $table->string('imagePath')->change();
        });
    }
};
