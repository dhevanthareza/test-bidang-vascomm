<?php

namespace App\Modules\Product\Models;
    
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use SoftDeletes;
    protected $table = 'product';
    protected $guarded = [];
    protected $appends = ['photo_url'];

    protected function getPhotoUrlAttribute() {
        return Storage::url($this->photo);
    }
}