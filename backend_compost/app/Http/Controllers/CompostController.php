<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Compost;

class CompostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $composts = Compost::all();
        
        return response()->json([
            'success' => true,
            'data' => $composts
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
        $user_id = auth()->user()->id;
        $inputs = $request->all();

        $composts = new Compost ();
        $composts->user_id = $user_id; 
        $composts->compost_date = $inputs['compost_date'];
        $composts->tank_name = $inputs['tank_name'];        

        $composts->save();

        return response()->json([
            'success'=> true,
            'data' => $composts->get()
 
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
        $composts = Compost::where('id',$id)->first();
        return response()->json([
           'success'=> true,
           'data'=> $composts

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

        $composts = Compost::where('id',$id)->first();
        // $composts->user_id = $inputs['user_id']; 
        // $composts->compost_date = $inputs['compost_date'];
        // $composts->tank_name = $inputs['tank_name'];
        $composts->update($inputs);
        
        // $composts->save();

        return response()->json([
            'success'=> true,
            'data'=> $composts
 
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
        Compost::where('id', $id)->delete();
        return response()->json([
            'success'=> true,
            'data'=> 'Successfully Deleted'
 
         ]);
    }
}