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
            'user_id' => ['required', 'integer'],
            'name' => ['required', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
            'participant_limit_number' => [ 'required', 'integer'],
            'description' => [ 'required', 'string'],
            'start_date' => 'required|date_format:H:i|',
            'end_date' => 'required|date_format:H:i|after:start_date',
            // 'image' => ['url', 'required'],
            // 'is_online' => ['bool', 'required'],
        ];
    }
}
