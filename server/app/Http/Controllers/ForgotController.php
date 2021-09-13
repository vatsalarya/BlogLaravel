<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

use function Psy\debug;

class ForgotController extends Controller
{
    public function forgot(Request $request){
        $email = $request->input('email');
        if(User::where('email', $email)->doesntExist()){
            return response(['message' => 'User doesnt exist!', 404]);
        }
        $token = Str::random(10);
        try{
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);
            //Send email
            Mail::raw('Click here to reset ypur password http://localhost:3000/reset/'.$token, function($message){
                $message->from('vatsal@example.com', 'Vatsal');
                $message->to('email@exapmle.com', 'someone');
            });
            return response(['message' => 'Check your email!']);
        }
        catch(\Exception $exception){
            return response(['message' => $exception->getMessage()], 400);
        }
    }

    public function reset(Request $request){
        // Log::debug(request('password'));
        // Log::debug(request('token'));
        $token = request('token');

        if(!$passwordResets = DB::table('password_resets')->where('token', $token)->first()){
            Log::debug('Yesssssssss');
            return response(['message' => 'Invalid Token!',], 400);
        }
        /** @var User $user */
        if(!$user = User::where('email', $passwordResets->email)->first()){
            return response(['message' => 'User doesnt exist!',], 404);
        }

        $user->password = Hash::make($request->input('password'));
        $user->save();
        return response(['message' => 'Success!',]);
    }

}
