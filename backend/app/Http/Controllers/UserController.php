<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    function register(Request $req){
        $user= new User;
        $user->firstName= $req->input('firstName');
        $user->lastName= $req->input('lastName');
        $user->address= $req->input('address');
        $user->phone= $req->input('phone');
        $user->email= $req->input('email');
        $user->birthday= $req->input('birthday');
        $user->password=$req->input('password') ;
        $user->save();
        return $user;
    }

    function login(Request $req){
        $user= User::where('email',$req->email)->first();
        return $user;
    }
}
