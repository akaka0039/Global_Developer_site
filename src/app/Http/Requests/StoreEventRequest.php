<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'required', 'max:255'],
            'limitMember' => ['string', 'required'],
            'address' => ['string', 'max:255'],
            'participant_limit_number' => ['integer', 'required'],
            'image' => ['url', 'required'],
            'description' => ['string', 'required'],
            'is_online' => ['bool', 'required'],
            'user_id' => ['integer']
        ];
    }
}
