<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->insert([
            [
                'id' => 1,
                'code' => 'create-user',
                'description' => 'Create User',
                'menu_id' => 2
            ],
            [
                'id' => 2,
                'code' => 'read-user',
                'description' => 'Read User',
                'menu_id' => 2
            ],
            [
                'id' => 3,
                'code' => 'update-user',
                'description' => 'Update User',
                'menu_id' => 2
            ],
            [
                'id' => 4,
                'code' => 'delete-user',
                'description' => 'Delete User',
                'menu_id' => 2
            ],
            [
                'id' => 5,
                'code' => 'configure_role',
                'description' => 'Add and remove role of user',
                'menu_id' => 2
            ],
            [
                'id' => 6,
                'code' => 'create-role',
                'description' => 'Create Role',
                'menu_id' => 3
            ],
            [
                'id' => 7,
                'code' => 'read-role',
                'description' => 'Read Role',
                'menu_id' => 3
            ],
            [
                'id' => 8,
                'code' => 'update-role',
                'description' => 'Update Role',
                'menu_id' => 3
            ],
            [
                'id' => 9,
                'code' => 'delete-role',
                'description' => 'Delete Role',
                'menu_id' => 3
            ],
            [
                'id' => 10,
                'code' => 'configure_permission',
                'description' => 'Add and remove permission of role',
                'menu_id' => 3
            ],
            [
                'id' => 15,
                'code' => 'create-permission',
                'description' => 'Create Permission',
                'menu_id' => 5
            ],
            [
                'id' => 16,
                'code' => 'read-permission',
                'description' => 'Read Permission',
                'menu_id' => 5
            ],
            [
                'id' => 17,
                'code' => 'update-permission',
                'description' => 'Update Permission',
                'menu_id' => 5
            ],
            [
                'id' => 18,
                'code' => 'delete-permission',
                'description' => 'Delete Permission',
                'menu_id' => 5
            ],
            [
                'id' => 19,
                'code' => 'create-customer',
                'description' => 'Create Customer',
                'menu_id' => 8
            ],
            [
                'id' => 20,
                'code' => 'read-customer',
                'description' => 'Read Customer',
                'menu_id' => 8
            ],
            [
                'id' => 21,
                'code' => 'update-customer',
                'description' => 'Update Customer',
                'menu_id' => 8
            ],
            [
                'id' => 22,
                'code' => 'delete-customer',
                'description' => 'Delete Customer',
                'menu_id' => 8
            ]
            
        ]);
    }
}
