<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClimateControlTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('climate_control', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->float('temperature');
            $table->float('humidity');
            $table->date('measuring_date');
            $table->bigInteger('comp_id');
            $table->foreign('comp_id')
                    ->references('id')
                    ->on('compost')
                    ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('climate_control');
    }
}
