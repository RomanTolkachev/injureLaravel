<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetNewsItemRequest;
use App\Models\News;
use Illuminate\Http\JsonResponse;


class GetNewsItemController extends Controller
{
    public function __invoke(GetNewsItemRequest $request)
    {
        $newsItem = News::where('id', $request->newsItemUuid)->first();

        if (!$newsItem) {
            return new JsonResponse(['error'=> "новость не найдена"], 404);
        } else {
            return new JsonResponse(['data'=>[$newsItem]]);
        }
    }
}
