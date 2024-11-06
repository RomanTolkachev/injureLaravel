<?php

namespace App\Http\Controllers;

use App\Models\Files_path_name;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class TestController extends Controller
{
    public function __invoke(Request $request){
        $allModels = Files_path_name::all();
        dump($allModels);
    }
}
