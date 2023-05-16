@extends('layout.index')
@section('content')
    <main id="home-page" class="main-content  mt-0">
        <section>
            <div class="container">
                <div class="card bg-primary text-white p-5 mt-5">
                    <div class="row justify-content-between">
                        <div>
                            <h1>Vascomm Ecommerce</h1>
                        </div>
                        @if ($user != null)
                            <div class="col-md-3">
                                <h2>Hello, {{ $user->name }}</h2>
                                <button @click="logout" class="btn btn-white btn-border">Logout</a>
                            </div>
                        @else
                            <div>
                                <a href="{!! url('') !!}/home/login"
                                    class="btn btn-white btn-border">Login/Register</a>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container my-5">
                <div v-if="isLoadingProducts">
                    <div class="row justify-content-center">
                        <div class="loader loader-lg"></div>
                    </div>
                </div>
                <div v-else class="row">
                    <div v-for="product in products" class="col-md-4 mb-4">
                        <div class="card">
                            <img :src="product.photo_url" class="card-img-top" alt="tes">
                            <div class="card-body">
                                <h5 class="card-title">@{{ product.name }}</h5>
                                <p class="card-text">@{{ product.description }}</p>
                                <p class="card-text">@{{ product.price.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
}) }}</p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <script>
        createApp({
            data() {
                return {
                    products: [],
                    isLoadingProducts: false,
                    page: 1
                }
            },
            created() {
                this.fetchProducts()
            },
            methods: {
                async fetchProducts() {
                    isLoadingProducts = true
                    const response = await httpClient.get("{!! url('') !!}/home/products", {
                        params: {
                            page: this.page
                        }
                    })
                    this.products = response.data.result.data
                    console.log(this.products)
                    isLoadingProducts = false
                },
                async logout() {
                    showLoading()
                    try {
                        await httpClient.get("{!! url('') !!}/home/logout")
                        location.href = "{!! url('') !!}/home"
                    } catch (err) {
                        hideLoading()
                        showToast({
                            message: err.message,
                            type: 'warning'
                        })
                    }
                }
            }
        }).mount('#home-page')
    </script>
@endsection
