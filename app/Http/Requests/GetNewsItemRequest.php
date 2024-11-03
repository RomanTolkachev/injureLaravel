<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

    /**
     * @property-read string $newsItemUuid
     */
class GetNewsItemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'newsItemUuid' => ['required', 'string']
        ];
    }
}
