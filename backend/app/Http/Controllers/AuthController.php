<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $valid = $request->validate([
                'name' => 'required|max:50',
                'gender' => 'required',
                'username' => 'required|max:20|unique:users',
                'email' => 'required|max:255|unique:users',
                'password' => 'required|min:4',
            ]);

            $user = User::create([
                'name' => $valid['name'],
                'gender' => $valid['gender'],
                'username' => '@' . $valid['username'],
                'email' => $valid['email'],
                'password' => Hash::make($valid['password']),
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => "User registered successfully",
                'token' => $token,
                'token_type' => 'Bearer',
                'user' => $user
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function login(Request $request)
    {
        try {
            $valid = $request->validate([
                'username' => 'required',
                'password' => 'required',
            ]);

            $user = User::where('username', '=', '@' . $valid['username'])->first();

            if (!$user || !Hash::check($valid['password'], $user->password)) {
                throw ValidationException::withMessages([
                    'credentials' => ['The provided credentials are incorrect.'],
                ]);
            }

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'User login successfully',
                'token' => $token,
                'token_type' => 'Bearer',
                'user' => $user
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ],);
        }
    }

    public function logout(Request $request)
    {
        try {
            // $request->user()->token()->delete();
            $id = $request->id;
            DB::table('personal_access_tokens')->where('tokenable_id', $id)->delete();

            return response()->json([
                'message' => 'User logged out successfully.'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }


    public function userProfile(Request $request)
    {
        try {
            return response()->json([
                'message' => 'User profile retrieved successfully',
                'data' => $request->user(),
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}