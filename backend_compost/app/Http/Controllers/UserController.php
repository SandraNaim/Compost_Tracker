<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        
        return response()->json([
            'success' => true,
            'data' => $users
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

        $users = new User ();
        $users->first_name = $inputs['first_name']; 
        $users->last_name = $inputs['last_name'];
        $users->phone = $inputs['phone'];
        $users->email = $inputs['email'];                
        $users->password = bcrypt($inputs['password']); 

        $users->save();

        return response()->json([
            'success'=> true,
            'data' => $users->get()
 
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
        $users = User::where('id',$id)->first();
        return response()->json([
           'success'=> true,
           'data'=> $users

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

        $users = User::where('id',$id)->first();
        $users->update($inputs);
        
        return response()->json([
            'success'=> true,
            'data'=> $users
 
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
