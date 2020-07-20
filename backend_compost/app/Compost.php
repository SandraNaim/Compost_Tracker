<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Compost extends Model
{
    protected $fillable = [
        'user_id', 'compost_date', 'tank_name',
    ];

    protected $table = "compost";
}
