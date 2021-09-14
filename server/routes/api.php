<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ForgotController;
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

Route::post('/login', [AuthController::class,'login']);
Route::post('/register', [AuthController::class,'register']);
Route::post('/forgot', [ForgotController::class,'forgot']);
Route::post('/reset/{token}', [ForgotController::class,'reset']);

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', [AuthController::class,'user']);
  Route::post('/logout', [AuthController::class,'logout']);
  Route::get('/userblogs', [BlogController::class,'userBlogs']);
  Route::post('/blogs/edit/{id}', [BlogController::class,'edit']);
  Route::get('/blogs/edit/{blog}', [BlogController::class,'showEditable']);
  Route::get('/blogs/{blog}', [BlogController::class,'show']);
  Route::get('/blogs', [BlogController::class,'index']);
  Route::post('/blogs', [BlogController::class,'create']);
});