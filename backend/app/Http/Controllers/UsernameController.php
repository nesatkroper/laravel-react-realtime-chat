<?php

namespace App\Http\Controllers;

use App\Models\Username;
use Illuminate\Http\Request;

class UsernameController extends Controller
{
    public function create(Request $request)
    {
        Username::create($request->all());
    }
}
