<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller
{
    public function index(){
        # code...
        return Blog::all()->take(50);
    }

    public function show(Blog $blog){
        $author = $blog->user->first_name." ".$blog->user->last_name;
        return ['id' => $blog->id, 'title' => $blog->title, 'body' => $blog->body, 'user_id' => $blog->user_id,  'author' => $author];
    }
    public function userBlogs(){
        return Auth::user()->blogs;
    }
    public function create(Request $request){
        // Log::debug($request->only('email', 'password'));
        Log::debug("Hello_1");
        try {
            $blog = new Blog;
            $blog->title = $request->input('title');
            $blog->body = $request->input('body');
            $blog->user_id = Auth::user()->id;
            $blog()->save();
            return response([
                'message' => 'Success!',
                'blog'=> $blog
            ]);
        }
        catch(\Exception $exception){
            return response(['message' => $exception], 400);
        }
    }
    public function edit(Blog $blog){
        if(Auth::user()->id === $blog->user()->id){

        }
    }
}
