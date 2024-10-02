<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    public function getMessage($creator)
    {
        try {
            $messge = Message::where('creator', '=', $creator)->with('users')->get();
            if ($messge != '[]') {
                return response()->json([
                    'data' => $messge,
                    'status' => true,
                    'message' => 'Messge get successfully'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'No Data Found'
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function createMessage(Request $request)
    {
        try {
            $message = Message::create([
                'creator' => $request->creator,
                'member' => $request->member,
                'message' => $request->message,
            ]);

            return response()->json([
                'data' => $message,
                'status' => true,
                'message' => 'Contact get successful'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
