<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller{
    public function index(){
        return Blog::all()->take(50);
    }

    public function show(Blog $blog){
        $author = $blog->user->first_name . " " . $blog->user->last_name;
        return [
            "id" => $blog->id,
            "title" => $blog->title,
            "body" => $blog->body,
            "user_id" => $blog->user_id,
            "author" => $author,
            "id" => $blog->id,
        ];
    }
    public function userBlogs(){
        return Auth::user()->blogs;
    }
    public function create(Request $request){
        DB::table("blogs")->insert([
            "title" => $request->input("title"),
            "body" => $request->input("body"),
            "user_id" => Auth::user()->id,
        ]);
        return response([
            "message" => "Success!",
        ]);
    }
    public function showEditable(Blog $blog){
        $author = $blog->user->first_name . " " . $blog->user->last_name;
        return [
            "id" => $blog->id,
            "title" => $blog->title,
            "body" => $blog->body,
            "user_id" => $blog->user_id,
            "author" => $author,
            "id" => $blog->id,
        ];
    }
    public function edit(Request $request, $id){
        $blog = DB::table("blogs")->where("id", $id)->first();
        if (Auth::user()->id === $blog->user_id) {
            DB::table("blogs")
                ->where("id", $id)
                ->update([
                    "title" => $request->input("title"),
                    "body" => $request->input("body"),
                    "user_id" => Auth::user()->id,
                ]);
            return response([
                "message" => "Success!",
            ]);
        }
        return response(
            ["message" => "You are not authorized to make this request"],
            401
        );
    }
}
