<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property-read integer $page
 * @property-read integer $rows
 */
class GetPortfoliosRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'page' => ['required', 'integer', 'between:1,500'],
            'rows' => ['required', 'integer', 'between:1,500'],
        ];
    }
}
