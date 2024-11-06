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
        Schema::create('files_path_names', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('path', 225);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('files_path_names');
    }
};
