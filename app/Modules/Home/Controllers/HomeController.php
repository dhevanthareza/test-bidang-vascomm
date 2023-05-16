<?php

namespace App\Modules\Home\Controllers;

use App\Handler\FileHandler;
use App\Handler\JsonResponseHandler;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Modules\Home\Requests\HomeLoginRequest;
use App\Modules\Home\Requests\HomeRegisterRequest;
use App\Modules\Product\Repositories\ProductRepository;
use App\Modules\User\Model\UserModel;
use App\Modules\User\Model\UserRoleModel;
use App\Type\JsonResponseType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class HomeController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return view('Home::index', ['user' => $user]);
    }

    public function fetchProducts()
    {
        $products = ProductRepository::datatable(15);
        return JsonResponseHandler::setResult($products)->send();
    }

    public function loginView()
    {
        return view('Home::login');
    }

    public function registerView()
    {
        return view('Home::register');
    }

    public function login(HomeLoginRequest $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        $user = UserModel::where('email', $email)->orWhere('username', $email)->first();
        if ($user == null) {
            return JsonResponseHandler::setCode(JsonResponseType::ERROR)
                ->setStatus(400)
                ->setMessage("User tidak ditemukan")
                ->send();
        }
        $password_valid = Hash::check($password, $user->password);
        if (!$password_valid) {
            return JsonResponseHandler::setCode(JsonResponseType::ERROR)
                ->setStatus(400)
                ->setMessage("Password Salah")
                ->send();
        }
        $is_activated = $user->activated_at != null;
        if (!$is_activated) {
            return JsonResponseHandler::setCode(JsonResponseType::ERROR)
                ->setStatus(400)
                ->setMessage("User belum diaktivasi oleh admin")
                ->send();
        }
        Auth::login($user, true);
        return JsonResponseHandler::setCode(JsonResponseType::SUCCESS)
            ->setMessage("Berhasil Login")
            ->setResult($user)
            ->send();
    }

    public function register(HomeRegisterRequest $request)
    {
        $payload = $request->all();
        $payload['photo'] = FileHandler::store($request->file('photo'));
        $payload['password'] = Hash::make($payload['password']);
        $payload['username'] = implode("_", explode(" ", $payload['name']));
        $user = UserModel::create($payload);
        $role = UserRoleModel::create(['user_id' => $user->id, 'role_id' => 2]);
        Auth::login($user, true);
        return JsonResponseHandler::setCode(JsonResponseType::SUCCESS)
            ->setMessage("Berhasil Login")
            ->setResult($user)
            ->send();
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return JsonResponseHandler::setMessage("Logout Berhasil")->send();
    }
}
