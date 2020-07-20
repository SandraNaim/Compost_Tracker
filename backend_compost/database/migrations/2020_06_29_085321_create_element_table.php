<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('element', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('comp_id');

            $table->foreign('comp_id')
                ->references('id')
                ->on('compost')
                ->onDelete('cascade');
            $table->bigInteger('element_id');

            $table->foreign('element_id')
                ->references('id')
                ->on('compost_element')
                ->onDelete('cascade');
            $table->date('element_date');
            $table->float('portion');
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
        Schema::dropIfExists('element');
    }
}
