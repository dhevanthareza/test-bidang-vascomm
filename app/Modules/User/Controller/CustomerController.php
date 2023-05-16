<?php

namespace App\Modules\User\Controller;

use App\Handler\JsonResponseHandler;
use App\Http\Controllers\Controller;
use App\Modules\User\Repositories\UserRepository;
use App\Modules\Permission\Repositories\PermissionRepository;
use App\Modules\User\Model\UserModel;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $permissions = PermissionRepository::getPermissionStatusOnMenuPath($request->path());
        return view('User::customer.index', ['permissions' => $permissions]);
    }

    public function datatable(Request $request)
    {
        $per_page = $request->input('per_page') != null ? $request->input('per_page') : 15;

        $keyword = $request->input('keyword') != null ? $request->input('keyword') : null;
        $data = UserModel::search($keyword)->whereHas('roles', function ($query) {
            $query->where('name', 'Customer');
        })->paginate($per_page);
        return JsonResponseHandler::setResult($data)->send();
    }

    public function activate(Request $request, $user_id) {
        $user = UserModel::where('id', $user_id)->update(['activated_at' => date("Y-m-d H:i:s")]);
        return JsonResponseHandler::setResult($user)->send();
    }
    public function deactivate(Request $request, $user_id) {
        $user = UserModel::where('id', $user_id)->update(['activated_at' => null]);
        return JsonResponseHandler::setResult($user)->send();
    }
}
