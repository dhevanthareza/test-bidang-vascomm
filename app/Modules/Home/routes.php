<?php
namespace App\Modules\Home;

use App\Modules\Home\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::prefix('/home')->group(function() {
    // PLACE SUB MENU OF MODULE BELOW

    Route::get('/', [HomeController::class, 'index']);
    Route::get('/products', [HomeController::class, 'fetchProducts']);
    Route::get('/login', [HomeController::class, 'loginView']);
    Route::get('/register', [HomeController::class, 'registerView']);
    Route::post('/login', [HomeController::class, 'login']);
    Route::post('/register', [HomeController::class, 'register']);
    Route::get('/logout', [HomeController::class, 'logout']);
});