<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Element;

class ElementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $elements = Element::all();
        
        return response()->json([
            'success' => true,
            'data' => $elements
        ], 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $inputs = $request->all();

        $elements = new Element ();
        $elements->comp_id = $inputs['comp_id']; 
        $elements->element_id = $inputs['element_id'];
        $elements->portion = $inputs['portion'];        
        $elements->element_date = $inputs['element_date'];        

        $elements->save();

        return response()->json([
            'success'=> true,
            'data' => $elements->get()
 
         ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $elements = Element::where('id',$id)->first();
        return response()->json([
           'success'=> true,
           'data'=> $elements

        ]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $inputs = $request->all();

        $elements = Element::where('id',$id)->first();
        $elements->update($inputs);
        
        return response()->json([
            'success'=> true,
            'data'=> $elements
 
         ]);
    }
    

 
}
