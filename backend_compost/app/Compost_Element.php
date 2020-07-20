<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Compost_Element extends Model
{
    protected $fillable = [
        'category', 'material_name', 'LbCuYd', 'percentH2O', 'perecentN', 'CNRatio', 'percentLigin', 'percentCellWall', 'percentC', 'percentCAvail', 'CNAvailable',
    ];

    protected $table = "compost_element";
}
