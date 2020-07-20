<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Compost_Element;

class CompostElementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $compost_elements = Compost_Element::all();
        $greenData = Compost_Element::where('category','green')->get();
        $brownData = Compost_Element::where('category','brown')->get();

        return response()->json([
            'success' => true,
            'data' => $compost_elements,
            'greenData' => $greenData,
            'brownData' => $brownData,
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

        $compost_elements = new Compost_Element ();
        $compost_elements->material_name = $inputs['material_name']; 
        $compost_elements->LbCuYd = $inputs['LbCuYd'];
        $compost_elements->percentH2O = $inputs['percentH2O']; 
        $compost_elements->percentN = $inputs['percentN']; 
        $compost_elements->CNRatio = $inputs['CNRatio'];
        $compost_elements->percentLigin = $inputs['percentLigin'];
        $compost_elements->percentCellWall = $inputs['percentCellWall']; 
        $compost_elements->percentC = $inputs['percentC'];
        $compost_elements->percentCAvail = $inputs['percentCAvail']; 
        $compost_elements->CNAvailable = $inputs['CNAvailable'];       
        $compost_elements->category = $inputs['category']; 

        $compost_elements->save();

        return response()->json([
            'success'=> true,
            'data' => $compost_elements->get()
 
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
        $compost_elements = Compost_Element::where('id',$id)->first();
        return response()->json([
           'success'=> true,
           'data'=> $compost_elements

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

        $compost_elements = Compost_Element::where('id',$id)->first();
        $compost_elements->update($inputs);
        
        return response()->json([
            'success'=> true,
            'data'=> $compost_elements
 
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
