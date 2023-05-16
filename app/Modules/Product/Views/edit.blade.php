@extends('dashboard_layout.index')
@section('content')
<div class="page-inner">
    <div id="edit-product" class="card">
        <div class="card-header pb-0">
            <div class="d-flex align-items-center">
                <h4 class="card-title">Tambah Product</h4>
            </div>
        </div>
        <div class="card-body">
            <form ref="product_form">
                <div class="row">

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Nama Produk</label>
                        <input v-model="product.name" class="form-control" type="text">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Harga Produk</label>
                        <input v-model="product.price" class="form-control" type="number">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Gambar Produk</label>
                        <input v-model="product.photo" class="form-control" type="text">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Deskripsi Produk</label>
                        <textarea v-model="product.description" class="form-control"></textarea>
                    </div>
                </div>

                </div>
                <div class="d-flex justify-content-end">
                    <button type="button" @click="back" class="btn btn-sm bg-warning mr-2 text-white">
                        Cancel
                    </button>
                    <button type="button" @click="update" class="btn btn-sm bg-primary mr-2 text-white">
                        Save Data
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    Vue.createApp({
        data() {
            return {
                product: {
					name: null,
					price: null,
					photo: null,
					description: null,

                },
                selectOptions: [
                    {
                        value: 1,
                        label: "Yes" 
                    },
                    {
                        value: 0,
                        label: "No"
                    }
                ],
                radioOptions: [
                    {
                        id: 1,
                        label: "Yes"
                    },
                    {
                        id: 0,
                        label: "No"
                    }
                ],
            }
        },
        async created() {
            showLoading()
            await this.fetchData()
            hideLoading()
        },
        methods: {
            async fetchData() {
                const response = await httpClient.get("{!! url('product') !!}/{{ $product_id }}")
                this.product = response.data.result
                console.log(this.product)
            },
            back() {
                history.back()
            },
            async update() {
                try {
                    showLoading()
                    const response = await httpClient.put("{!! url('product') !!}/{{ $product_id }}",
                        this.product)
                    hideLoading()
                    showToast({
                        message: "Data berhasil disimpan"
                    })

                } catch (err) {
                    hideLoading()
                    showToast({
                        message: err.message,
                        type: 'error'
                    })
                }
            }
        },
        components: {
            'vue-multiselect': VueformMultiselect
        },
    }).mount("#edit-product")
</script>
@endsection