<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_tiles', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table
                ->foreignId('tile_id')
                ->references('id')
                ->on('tiles')
                ->onDelete('cascade');
            $table
                ->foreignId('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_tiles');
    }
}
