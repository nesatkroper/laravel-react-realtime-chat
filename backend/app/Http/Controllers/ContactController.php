<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;

use function PHPSTORM_META\type;

class ContactController extends Controller
{
    public function getContact($creator)
    {
        try {
            $find = Contact::where('creator', '=', $creator)
                ->orWhere('member', '=', $creator)
                ->get();

            $contact = null;
            $type = null;
            if ($find[0]->creator == $creator) {
                $contact = Contact::where('creator', $creator)->with('member')->get();
                $type = 'member';
            } else {
                $contact = Contact::where('member', $creator)->with('creator')->get();
                $type = 'creator';
            }


            if ($contact) {
                return response()->json([
                    'data' => $contact,
                    'type' => $type,
                    'status' => true,
                    'message' => 'Contact get successfully'
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
    public function getOnlyContact($creator, $member)
    {
        try {
            $find = Contact::where('creator', '=', $creator)->where('member', '=', $member)->orWhere('member', '=', $creator)->where('creator', '=', $member)->get();

            $contact = null;
            $type = null;
            if ($find[0]->creator == $creator) {
                $contact = Contact::where('creator', '=', $creator)->where('member', '=', $member)->with('member')->get();
                $type = 'member';
            } else {
                $contact = Contact::where('creator', '=', $member)->where('member', '=', $creator)->with('creator')->get();
                $type = 'creator';
            }

            if ($find) {
                return response()->json([
                    'data' => $contact,
                    'type' => $type,
                    'status' => true,
                    'message' => 'Contact get successfully'
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
    public function createContact(Request $request)
    {
        try {
            $phone = User::where('phone', '=', $request->phone)->first();
            if ($phone) {
                $contact = Contact::create([
                    'creator' => $request->creator,
                    'member' => $phone->usr_id,
                    'phone' => $phone->phone,
                    'name' => $request->name,
                    'status' => 'active',
                ]);
                return response()->json([
                    'data' => $contact,
                    'status' => true,
                    'message' => 'Contact get successful'
                ]);
            } else {
                return response($phone);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
