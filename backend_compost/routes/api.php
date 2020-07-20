<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'ApiController@login');
Route::get('register', 'ApiController@register');
Route::resource('user', 'UserController')->only([
    'index', 'store', 'update', 'show', 'destroy'
    ]);

    Route::get('compost_element', 'CompostElementController@index' );

Route::group(['middleware' => 'auth'], function () {

    
    Route::resource('compost', 'CompostController')->only([
    'index', 'store', 'update', 'show', 'destroy'
    ]);

    Route::resource('compost_element', 'CompostElementController')->only([
     'store', 'update', 'show', 'destroy'
    ]);

    Route::resource('element', 'ElementController')->only([
    'index', 'store', 'update', 'show', 'destroy'
    ]);

    Route::resource('element', 'ElementController')->only([
    'index', 'store', 'update', 'show', 'destroy'
    ]);

    Route::resource('climate_control', 'ClimateControlController')->only([
    'index', 'store', 'update', 'show', 'destroy'
    ]);

    
});