<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use function Psy\debug;

class BlogController extends Controller
{
    public function index(){
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
        // Log::debug(Auth::user()->id);
        // try {
            DB::table('blogs')->insert([
                "title" => $request->input('title'),
                "body" => $request->input('body'),
                "user_id" => Auth::user()->id,
            ]);
            return response([
                'message' => 'Success!',
            ]);
        // }
        // catch(\Exception $exception){
            // return response(['message' => $exception], 400);
        // }
    }
    public function showEditable(Blog $blog){
        $author = $blog->user->first_name." ".$blog->user->last_name;
        return ['id' => $blog->id, 'title' => $blog->title, 'body' => $blog->body, 'user_id' => $blog->user_id,  'author' => $author, 'id' => $blog->id];
    }
    public function edit(Request $request){
        /** @var Blog $blog */
        $blog = DB::table('blogs')->where('id', $request->input('id'))->first();
        Log::debug(Auth::user()->id === $blog->user_id);
        if(Auth::user()->id === $blog->user_id){
            try {
                DB::table('blogs')->where('id', $request->input('id'))
                ->update([
                  "title" => $request->input('title'),
                  "body" => $request->input('body'),
                  "user_id" => Auth::user()->id,
                ]);
                return response([
                    'message' => 'Success!',
                ]);
            }
            catch(\Exception $exception){
                return response(['message' => $exception], 400);
            }
        }
        return response(['message' => "You are not authorized to make this request"], 401);
    }
}
