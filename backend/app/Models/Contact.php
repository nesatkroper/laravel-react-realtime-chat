<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $primaryKey = 'con_id';

    protected $fillable = [
        'creator',
        'member',
        'name',
        'phone',
        'status'
    ];
}