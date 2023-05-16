<?php

namespace App\Modules\Product\Repositories;

use App\Modules\Product\Models\Product;

class ProductRepository
{
    public static function datatable($per_page = 15)
    {
        $data = Product::paginate($per_page);
        return $data;
    }
    public static function get($product_id)
    {
        $product = Product::where('id', $product_id)->first();
        return $product;
    }
    public static function create($product)
    {
        $product = Product::create($product);
        return $product;
    }

    public static function update($product_id, $product)
    {
        Product::where('id', $product_id)->update($product);
        $product = Product::where('id', $product_id)->first();
        return $product;
    }

    public static function delete($product_id)
    {
        $delete = Product::where('id', $product_id)->delete();
        return $delete;
    }
}
