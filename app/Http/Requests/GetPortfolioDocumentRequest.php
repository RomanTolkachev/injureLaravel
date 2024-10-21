<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetPortfolioDocumentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'portfolioId' => [
                'required',
                'integer',
                'exists:portfolios,id'
            ],
        ];
    }
}
