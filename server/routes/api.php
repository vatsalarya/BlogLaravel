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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', [AuthController::class,'login']);
Route::post('/register', [AuthController::class,'register']);
Route::post('/forgot', [ForgotController::class,'forgot']);
Route::post('/reset/{token}', [ForgotController::class,'reset']);

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', [AuthController::class,'user']);
  Route::get('/blogs', [BlogController::class,'index']);
  Route::get('/userblogs', [BlogController::class,'userBlogs']);
  Route::post('/blogs/edit/{blog}', [BlogController::class,'edit']);
  Route::post('/blogs', [BlogController::class,'create']);
  Route::get('/blogs/edit/{blog}', [BlogController::class,'showEditable']);
  Route::get('/blogs/{blog}', [BlogController::class,'show']);
  // Route::post('logout', [AuthController::class, 'logout']);
});