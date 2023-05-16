@extends('dashboard_layout.index')
@section('content')
    <div class="page-inner" id="user-page">
        <default-datatable ref="datatable" title="User" url="{!! url('user/customer') !!}" :headers="headers"
            :can-edit="false" :can-delete="false">
            <template #photo="{ content }">
                <img width="100" :src="content.photo_url" />
            </template>
            <template #left-action="{ content }">
                <button v-if="content.activated_at == null" @click="handleActivateButtonClick(content.id)" type="button"
                    class="btn btn-xs btn-info mr-1" data-toggle="modal">
                    Activate
                </button>
                <button v-else @click="handleDeactivateButtonClick(content.id)" type="button"
                    class="btn btn-xs btn-danger mr-1" data-toggle="modal">
                    Deactivate
                </button>
            </template>
        </default-datatable>

        <div ref="modal" class="modal fade" id="addRoleModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tambah Role</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        createApp({
            data() {
                return {
                    roles: [],
                    userRoles: [],
                    isFetchingUserRole: false,
                    showModal: false,
                    headers: [{
                            text: 'id',
                            value: 'id',
                        },
                        {
                            text: 'Nama User',
                            value: 'name',
                        },
                        {
                            text: 'Username User',
                            value: 'username',
                        },
                        {
                            text: 'Email User',
                            value: 'email',
                        },
                        {
                            text: 'Photo',
                            value: 'photo',
                        },
                    ],
                    selectedRoleId: null,
                    selectedUserId: null,
                    isAddingRole: false,
                    isRemoveRole: false
                }
            },
            created() {
                // this.fetchRoles()
            },
            components: {
                ...commonComponentMap(
                    [
                        'DefaultDatatable',
                    ]
                )
            },
            methods: {
                async handleActivateButtonClick(userId) {
                    Swal.fire({
                        title: "Apakah anda yakin ingin mengaktivasi user ini?",
                        showDenyButton: true,
                        confirmButtonText: `Yakin`,
                        denyButtonText: `Tidak`,
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            showLoading()
                            await httpClient.post(
                                `{!! url('') !!}/user/customer/activation/${userId}`);
                            hideLoading()
                            Swal.fire("User berhasil diaktivasi!", "", "success");
                            this.$refs.datatable.fetchData();
                        } else if (result.isDenied) {
                            Swal.fire("Proses aktivasi dibatalkan", "", "info");
                            this.fetchData();
                        }
                    });
                },
                async handleDeactivateButtonClick(userId) {
                    Swal.fire({
                        title: "Apakah anda yakin ingin mengdeaktivasi user ini?",
                        showDenyButton: true,
                        confirmButtonText: `Yakin`,
                        denyButtonText: `Tidak`,
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            showLoading()
                            await httpClient.post(
                                `{!! url('') !!}/user/customer/deactivation/${userId}`);
                            hideLoading()
                            Swal.fire("User berhasil dideaktivasi!", "", "success");
                            this.$refs.datatable.fetchData();
                        } else if (result.isDenied) {
                            Swal.fire("Proses deaktivasi dibatalkan", "", "info");
                            this.fetchData();
                        }
                    });
                },
            },
        }).component('vue-multiselect', VueformMultiselect).mount('#user-page');
    </script>
@endsection
