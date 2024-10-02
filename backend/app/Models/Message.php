<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected  $table = 'messages';

    protected $guarded = 'msg_id';

    protected $primaryKey = "msg_id";

    protected $fillable = [
        'creator',
        'member',
        'message',
        'photo'
    ];

    public function users()
    {
        return $this->hasMany(User::class, 'usr_id', 'member');
    }
}
