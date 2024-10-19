<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetPortfoliosRequest;
use App\Models\Portfolio;
use Illuminate\Http\JsonResponse;

class GetPortfoliosController extends Controller
{
    public function __invoke(GetPortfoliosRequest $request)
    {
        $portfolios = Portfolio::paginate(
            page: $request->page,
            perPage: $request->rows,
        );

        return new JsonResponse($portfolios);
    }
}

