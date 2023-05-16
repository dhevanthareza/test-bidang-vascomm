<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Developer',
            'username' => 'developer',
            'email' => 'developer@gmail.com',
            'password' => Hash::make('kecilsemuatanpaspasi'),
        ]);
        DB::table('users')->insert([
            'name' => 'Dhevan Customer',
            'username' => 'Dhevan_Customer',
            'email' => 'dhevanthareza@gmail.com',
            'password' => Hash::make('kecilsemuatanpaspasi'),
        ]);
    }
}
