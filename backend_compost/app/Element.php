<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Element extends Model
{
    protected $fillable = [
        'comp_id', 'element_id', 'portion', 'element_date',
    ];

    protected $table = "element";

    public function element()
    {
        return $this->belongsTo('App\Compost_Element');
    }
}
