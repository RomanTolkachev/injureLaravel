<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetNewsRequest;
use App\Models\News;
use Illuminate\Http\JsonResponse;

class GetNewsController extends Controller
{
    public function __invoke(GetNewsRequest $request)
    {
        $news = News::orderBy('created_at')->paginate(
            page: $request->page,
            perPage: $request->rows,
        );

        return new JsonResponse($news);
    }
}
