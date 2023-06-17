<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\UniqueEmail;


class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    { 
        $userId = $this->user()->user_id;
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', new UniqueEmail($userId)],
            'image' => ['nullable'],
            'introduction '=> ['nullable'],
            'habitation' => ['nullable'],
            'nationality' => ['nullable'],
            'url' => ['nullable'],
        ];
    }

    protected function passedValidation(): void
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
