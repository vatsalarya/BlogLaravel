<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        # code...
        return Blog::all()->take(50);
    }

    public function show(Blog $blog){
        $author = $blog->user->first_name." ".$blog->user->last_name;
        return ['id' => $blog->id, 'title' => $blog->title, 'body' => $blog->body, 'user_id' => $blog->user_id,  'author' => $author];
    }

}
