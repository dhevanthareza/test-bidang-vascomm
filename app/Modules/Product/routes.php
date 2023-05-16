<?php
namespace App\Modules\Product;

use App\Modules\Product\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('/product')->group(function() {
    // PLACE SUB MENU OF MODULE BELOW

    Route::get('/', [ProductController::class, 'index'])->middleware('authorize:read-products');
    Route::get('/datatable', [ProductController::class, 'datatable'])->middleware('authorize:read-products');
    Route::get('/create', [ProductController::class, 'create'])->middleware('authorize:create-products');
    Route::post('/', [ProductController::class, 'store'])->middleware('authorize:create-products');
    Route::get('/{product_id}', [ProductController::class, 'show'])->middleware('authorize:read-products');
    Route::get('/{product_id}/edit', [ProductController::class, 'edit'])->middleware('authorize:update-products');
    Route::put('/{product_id}', [ProductController::class, 'update'])->middleware('authorize:update-products');
    Route::delete('/{product_id}', [ProductController::class, 'destroy'])->middleware('authorize:delete-products');
});