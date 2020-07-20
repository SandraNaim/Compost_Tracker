<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Climate_Control extends Model
{
    protected $fillable = [
        'comp_id', 'measuring_date', 'temperature', 'humidity',
    ];

    protected $table = "climate_control";
}
