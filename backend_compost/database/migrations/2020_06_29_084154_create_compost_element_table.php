<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompostElementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compost_element', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('material_name');
            $table->float('LbCuYd');
            $table->float('percentH2O');
            $table->float('percentN');
            $table->float('CNRatio');
            $table->float('percentLigin');
            $table->float('percentCellWall');
            $table->float('percentC');
            $table->float('percentCAvail');
            $table->float('CNAvailable');
            $table->string('category');
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
        Schema::dropIfExists('compost_element');
    }
}
