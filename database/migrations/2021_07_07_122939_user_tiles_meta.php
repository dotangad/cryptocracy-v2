<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserTilesMeta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_tiles', function (Blueprint $table) {
            $table->boolean('solved')->default(false);
            $table->text('media_link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_tiles', function (Blueprint $table) {
            $table->dropColumn(['solved', 'media_link']);
        });
    }
}
