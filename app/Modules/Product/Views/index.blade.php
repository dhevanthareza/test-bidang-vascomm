@extends('dashboard_layout.index')
@section('content')
    <div class="page-inner" id="product">
        <default-datatable 
            title="Product" url="{!! url('product') !!}" 
            :headers="headers"
            :can-add="{{ $permissions['create-products'] }}" 
            :can-edit="{{ $permissions['update-products'] }}"
            :can-delete="{{ $permissions['delete-products'] }}"
        >
            <template #photo="{ content }">
                <img width="100" :src="content.photo_url" />
            </template>
        </default-datatable>
    </div>

    <script>
        createApp({
            data() {
                return {
                    headers: [{
                            text: 'Id',
                            value: 'id',
                        },
                        {
                            value: 'name',
                            text: 'Nama Produk'
                        },
                        {
                            value: 'price',
                            text: 'Harga Produk'
                        },
                        {
                            value: 'photo',
                            text: 'Gambar Produk'
                        },
                        {
                            value: 'description',
                            text: 'Deskripsi Produk'
                        },
                    ],
                }
            },
            created() {},
            methods: {},
            components: {
                ...commonComponentMap(
                    [
                        'DefaultDatatable',
                    ]
                )
            },
        }).mount('#product');
    </script>
@endsection
