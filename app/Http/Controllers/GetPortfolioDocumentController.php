<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetPortfolioDocumentRequest;
use App\Models\Portfolio;
use Illuminate\Support\Facades\Storage;

class GetPortfolioDocumentController extends Controller
{
    public function __invoke(GetPortfolioDocumentRequest $request)
    {
        $portfolio = Portfolio::findOrFail($request->portfolioId);
        return Storage::download($portfolio->document_path);
    }
}
