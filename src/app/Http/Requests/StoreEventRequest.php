<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * @return bool
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'integer'],
            'name' => ['required', 'string', 'max:255'],
            'address' => $this->input('is_online') ? ['required', 'url'] : ['required', 'string', 'max:255'],
            'participant_limit_number' => [ 'required', 'integer'],
            'description' => [ 'required', 'string'],
            'start_date' => ['required', 'date_format:Y-m-d H:i'],
            'end_date' => ['required', 'date_format:Y-m-d H:i', 'after:start_date'],
            'is_online' => ['bool', 'required'],
            'tags' => ['array'],
        ];
    }

    /**
     * To save pass of a image into database
     * @return void
     */
    protected function passedValidation(): void
    {
        if ($this->hasFile('image')) {
            $original = $this->file('image')->getClientOriginalName();
            $name = date('Ymd_His') . '_' . $original;
            $this->file('image')->move('storage/images', $name);
            $this->merge([
                'image' => $name,
            ]);
        } else {
            // default
            $this->merge([
                'image' => 'top_background.jpg',
            ]);
        }
    }
}
