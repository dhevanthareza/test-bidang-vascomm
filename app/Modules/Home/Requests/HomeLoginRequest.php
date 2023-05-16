<?php

namespace App\Modules\Home\Requests;

use App\Request\AppFormRequest;

class HomeLoginRequest extends AppFormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required',
            'password' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama tidak boleh kosong',
            'email.required' => 'Email tidak boleh kosong',
        ];
    }
}
