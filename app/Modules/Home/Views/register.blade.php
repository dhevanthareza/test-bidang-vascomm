@extends('layout.index')
@section('content')
    <div id="signup-page" class="row justify-content-center align-items-center mt-5">
        <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
            <div class="card card-plain">
                <div class="card-header pb-0 text-start">
                    <h4 class="font-weight-bolder">Sign Up</h4>
                    <p class="mb-0">Enter your data to sign up</p>
                </div>
                <div class="card-body">
                    <form role="form">
                        <div class="mb-3">
                            <input v-model="name" type="text" class="form-control form-control-lg" placeholder="Name"
                                aria-label="Name">
                        </div>
                        <div class="mb-3">
                            <input v-model="email" type="email" class="form-control form-control-lg"
                                placeholder="Email" aria-label="Email">
                        </div>
                        <div class="mb-3">
                            <input v-model="password" type="password" class="form-control form-control-lg"
                                placeholder="Password" aria-label="Password">
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label>Selfie Photo</label>
                                <input type="file" class="form-control form-control-lg"
                                    placeholder="Photo" aria-label="Photo" @change="handleFileChange">
                            </div>
                        </div>
                        <div class="text-center">
                            <button @click="signup" type="button"
                                class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                    <p class="mb-4 text-sm mx-auto">
                        Already have an account?
                        <a href="{!! url('') !!}/home/login"
                            class="text-primary text-gradient font-weight-bold">Login</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <script>
        createApp({
            data() {
                return {
                    name: null,
                    email: null,
                    password: null,
                    photo: null
                }
            },
            methods: {
                handleFileChange(event) {
                    this.photo = event.target.files[0];
                },
                async signup() {
                    try {
                        showLoading()
                        const {
                            name,
                            password,
                            email,
                            photo
                        } = this
                        const userFormData = new FormData();
                        
                        if(name != null) userFormData.append('name', name)
                        if(password != null) userFormData.append('password', password)
                        if(email != null) userFormData.append('email', email)
                        if(photo != null) userFormData.append('photo', photo)
                        const response = await httpClient.post("{!! url('') !!}/home/register", userFormData)
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
        }).mount('#signup-page')
    </script>
@endsection
