<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\DB;

class UniqueEmail implements Rule
{
    private $userId;

    public function __construct($userId)
    {
        $this->userId = $userId;
    }

    public function passes($attribute, $value)
    {
        return DB::table('users')
            ->where('email', $value)
            ->where('user_id', '<>', $this->userId)
            ->doesntExist();
    }

    public function message()
    {
        return 'The email has already been taken.';
    }
}
