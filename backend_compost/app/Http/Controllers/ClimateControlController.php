<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Climate_Control;

class ClimateControlController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $climatecontrols = Climate_Control::all();
        
        return response()->json([
            'success' => true,
            'data' => $climatecontrols
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

        $climatecontrols = new Climate_Control ();
        $climatecontrols->comp_id = $inputs['comp_id']; 
        $climatecontrols->measuring_date = $inputs['measuring_date'];
        $climatecontrols->temperature = $inputs['temperature'];
        $climatecontrols->humidity = $inputs['humidity'];                

        $climatecontrols->save();

        return response()->json([
            'success'=> true,
            'data' => $climatecontrols->get()
 
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
        $climatecontrols = Climate_Control::where('id',$id)->first();
        return response()->json([
           'success'=> true,
           'data'=> $climatecontrols

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

        $climatecontrols = Climate_Control::where('id',$id)->first();
        $climatecontrols->update($inputs);
        
        return response()->json([
            'success'=> true,
            'data'=> $climatecontrols
 
         ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
