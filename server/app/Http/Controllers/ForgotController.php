<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ForgotController extends Controller
{
    public function forgot(Request $request){
        $email = $request->input('email');
        if(User::where('email', $email)->doesntExist()){
            return response([
                'message' => 'User doesnt exist!'
            , 404]);
        }
        $token = Str::random(10);
        try{
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);
            //Send email
            Log::debug('Click here to reset your password http://127.0.0.1:8000/reset/'.($token));
            Mail::raw('http://127.0.0.1:8000/user'.$token, function($message){
                $message->from('vatsal@example.com', 'Vatsal');
                $message->to('email@exapmle.com', 'someone');
            });
            return response([
                'message' => 'Check your email!'
            ]);
        }
        catch(\Exception $exception){
            return response([
                'message' => $exception
            ], 400);
        }

    }
}
