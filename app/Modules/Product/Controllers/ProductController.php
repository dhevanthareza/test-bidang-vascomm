<?php

namespace App\Modules\Product\Controllers;

use App\Handler\FileHandler;
use App\Handler\JsonResponseHandler;
use App\Http\Controllers\Controller;
use App\Modules\Product\Repositories\ProductRepository;
use App\Modules\Product\Requests\ProductCreateRequest;
use App\Modules\Permission\Repositories\PermissionRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $permissions = PermissionRepository::getPermissionStatusOnMenuPath($request->path());
        return view('Product::index', ['permissions' => $permissions]);
    }

    public function datatable(Request $request)
    {
        $per_page = $request->input('per_page') != null ? $request->input('per_page') : 15;
        $data = ProductRepository::datatable($per_page);
        return JsonResponseHandler::setResult($data)->send();
    }

    public function create()
    {
        return view('Product::create');
    }

    public function store(ProductCreateRequest $request)
    {
        $payload = $request->all();
        $payload['photo'] = FileHandler::store($request->file('photo'));
        $product = ProductRepository::create($payload);
        return JsonResponseHandler::setResult($product)->send();
    }

    public function show(Request $request, $id)
    {
        $product = ProductRepository::get($id);
        return JsonResponseHandler::setResult($product)->send();
    }

    public function edit($id)
    {
        return view('Product::edit', ['product_id' => $id]);
    }

    public function update(Request $request, $id)
    {
        $payload = $request->all();
        unset($payload['created_at']);
        unset($payload['updated_at']);
        $product = ProductRepository::update($id, $payload);
        return JsonResponseHandler::setResult($product)->send();
    }

    public function destroy(Request $request, $id)
    {
        $delete = ProductRepository::delete($id);
        return JsonResponseHandler::setResult($delete)->send();
    }
}
