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
        return ['id' => $blog->id, 'title' => $blog->title, 'body' => $blog->body, 'user_id' => $blog->user_id,  'author' => $author, 'id' => $blog->id];
    }
    public function userBlogs(){
        return Auth::user()->blogs;
    }
    public function create(Request $request){
        Log::debug("Hello_1");
        try {
            /** @var Blog $blog */
            $blog = new Blog;
            $blog->title = $request->input('title');
            $blog->body = $request->input('body');
            $blog->user_id = Auth::user()->id;
            $blog()->save();
            return response(['message' => 'Success!', 'blog'=> $blog]);
        }
        catch(\Exception $exception){
            return response(['message' => $exception->getMessage()], 400);
        }
    }
    public function showEditable(Blog $blog){
        $author = $blog->user->first_name." ".$blog->user->last_name;
        return ['id' => $blog->id, 'title' => $blog->title, 'body' => $blog->body, 'user_id' => $blog->user_id,  'author' => $author, 'id' => $blog->id];
    }
    public function edit(Request $request){
        // Log::debug(Auth::user()->id === $request->input('user_id'));
        if(Auth::user()->id === $request->input('user_id')){
            /** @var Blog $blog */
            $blog = Blog::find($request->id)->first();
            Log::debug($blog);
            try {
                $blog->title = $request->input('title');
                $blog->body = $request->input('body');
                $blog->user_id = Auth::user()->id;
                $blog()->save();
                return response(['message' => 'Success!', 'blog'=> $blog]);
            }
            catch(\Exception $exception){
                return response(['message' => $exception->getMessage()], 400);
            }
        }
        return response(['message' => 'You are not authorized to make this request.'], 401);
    }
}
