@extends('layout.index')
@section('content')
    <div id="login-page" class="row justify-content-center align-items-center mt-5">
        <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
            <div class="card card-plain">
                <div class="card-header pb-0 text-start">
                    <h4 class="font-weight-bolder">SignIn</h4>
                    <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                    <form role="form">
                        <div class="mb-3">
                            <input v-model="email" type="email" class="form-control form-control-lg" placeholder="Email"
                                aria-label="Email">
                        </div>
                        <div class="mb-3">
                            <input v-model="password" type="password" class="form-control form-control-lg"
                                placeholder="Password" aria-label="Password">
                        </div>
                        <div class="text-center">
                            <button @click="login" type="button"
                                class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                    <p class="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a href="{!! url('') !!}/home/register" class="text-primary text-gradient font-weight-bold">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <script>
        createApp({
            data() {
                return {
                    email: null,
                    password: null
                }
            },
            methods: {
                async login() {
                    try {
                        showLoading()
                        const {
                            email,
                            password
                        } = this
                        const response = await httpClient.post('/home/login', {
                            email,
                            password
                        })
                        location.href = "/home"
                    } catch (err) {
                        hideLoading()
                        showToast({
                            message: err.message,
                            type: "warning"
                        })
                    }
                }
            }
        }).mount('#login-page')
    </script>
@endsection
