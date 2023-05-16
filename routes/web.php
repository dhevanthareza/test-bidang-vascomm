<?php

use App\Http\Controllers\KaryawanController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->group(function () {
    require app_path('Modules/Employee/routes.php');
    require app_path('Modules/Dashboard/routes.php');
    require app_path('Modules/User/routes.php');
    require app_path('Modules/Role/routes.php');
    require app_path('Modules/Permission/routes.php');
    require app_path('Modules/UserPref/routes.php');
    require app_path('Modules/Product/routes.php');
    require app_path('Modules/Menu/routes.php');
    
    // ROUTE_MARKER
    // Add routes in the line below (DONT REMOVE THIS SECTION !!!!!!, because this line is LINE_MARKER used by Module Generator)
});

require app_path('Modules/Home/routes.php');


Route::get('/', function () {
    return redirect('/home');
});
