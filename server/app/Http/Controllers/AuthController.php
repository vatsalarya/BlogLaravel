<?php

namespace App\Http\Controllers;

// use App\Http\Requests\LoginRequest;
// use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login(Request $request){
        request()->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        Log::debug($request);
        try{
            if(Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
                /** @var User user */
                $user = Auth::user();
                $token = $user->createToken('app')->plainTextToken;
                $cookie = cookie('jwt', $token, 60*24);
                return response([
                    'message' => 'Success!',
                    'user'=> $user,
                ])->withCookie($cookie);
            }
        }catch(\Exception $exception){
            return response(['message' => $exception->getMessage()], 400);
        }
        return response(['message' => 'Invalid username/password'], 401);
    }

    public function user(){
        // Log::debug(Auth::user()->blogs->first());
        return Auth::user();
    }

    public function register(Request $request){
        Log::debug($request->only('email', 'password'));
        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);
            $token = $user->createToken('app')->plainTextToken;
            $cookie = cookie('jwt', $token, 60*24);
            return response([
                'message' => 'Success!',
                'user'=> $user,
            ])->withCookie($cookie);
        }
        catch(\Exception $exception){
            return response(['message' => $exception->getMessage()], 400);
        }
    }

    public function logout(){
        $cookie = Cookie::forget('jwt');
        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }

}