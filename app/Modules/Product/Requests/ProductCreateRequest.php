<?php

namespace App\Modules\Product\Requests;

use App\Request\AppFormRequest;


class ProductCreateRequest extends AppFormRequest
{
    public function rules(): array
    {
        return [
				'name' => 'required',
				'price' => 'required',
				'photo' => 'required',
				'description' => 'required',
			];
    }

    public function messages(): array
    {
        return [
            
        
				'name.required' => 'Nama Produk tidak boleh kosong',
				'price.required' => 'Harga Produk tidak boleh kosong',
				'photo.required' => 'Gambar Produk tidak boleh kosong',
				'description.required' => 'Deskripsi Produk tidak boleh kosong',
			];
    }

}     