<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function store(){
        return 'Hello';
    }

    public function index(Request $request){
        return $request->input();
    }
}
