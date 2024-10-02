<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contacts';

    protected $guarded = 'con_id';

    protected $primaryKey = 'con_id';

    protected $fillable = [
        'creator',
        'member',
        'name',
        'phone',
        'status'
    ];

    public function member()
    {
        return $this->hasMany(User::class, 'usr_id', 'member');
    }

    public function creator()
    {
        return $this->hasMany(User::class, 'usr_id', 'creator');
    }
}
