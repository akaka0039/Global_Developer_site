<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;



class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    { 
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email,'.$this->user()->user_id.',user_id'],
            'introduction' => ['nullable', 'string'],
            'habitation' => ['nullable', 'string'],
            'nationality' => ['nullable', 'string'],
            'url' => ['nullable', 'url']
        ];
    }

    public function passedValidation(): void
    { 
        if ($this->hasFile('image')) {
            $original = $this->file('image')->getClientOriginalName();
            $name = date('Ymd_His') . '_' . $original;
            $this->file('image')->move('storage/images', $name);
            $this->merge([
                'image' => $name,
            ]);
        }
    } 
}
