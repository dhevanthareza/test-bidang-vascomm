<?php

namespace App\Modules\Home\Requests;

use App\Request\AppFormRequest;

class HomeRegisterRequest extends AppFormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'photo' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama tidak boleh kosong',
            'email.required' => 'Email tidak boleh kosong',
            'photo.required' => 'Selfie Photo tidak boleh kosong',
            'password.required' => 'Password tidak boleh kosong',
        ];
    }
}
