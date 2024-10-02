<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetServicesController extends Controller
{
    public function __invoke(Request $request)
    {
        $services = Service::all();

        return new JsonResponse($services);
    }
}
