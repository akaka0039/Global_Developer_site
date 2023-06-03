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
        Schema::table('users', function (Blueprint $table) {
            $table->text('introduction')->nullable()->after('name');
            $table->string('image')->nullable()->after('introduction');
            $table->string('address')->nullable()->after('image');
            $table->string('position')->nullable()->after('address');
            $table->string('url')->nullable()->after('position');
            $table->integer('attendance_count')->default(0)->after('url');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('image');
            $table->dropColumn('address');
            $table->dropColumn('position');
            $table->dropColumn('introduction');
            $table->dropColumn('url');
            $table->dropColumn('attendance_count');
        });
    }
};
