<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class FormController extends Controller
{

    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:50',
            'email' => 'required|string|max:50',
            'phone' => 'nullable|string|min:3|regex:/^[\d+]+$/',
            'text' => 'required|string|max:250',
        ]);

        if ($validator->fails()) {
            Log::channel('form')->error(
                'Validator failed',
                [
                    'errors' => $validator->errors()->all(),
                    'input' => $request->all()
                ]
            );

            return response()->json([
                'errors' => $validator->errors()->toArray()
            ], 422);
        }
        $data = $validator->validated();

        try {
            Mail::to('roman.babayan1133@gmail.com')->send(new ContactFormMail($data));
            Log::channel('form')->info(
                'Mail sended',
                [
                    'from' => $data['email'],
                ]
            );
        } catch (Exception $e) {
            Log::channel('form')->error(
                'Error sending message',
                [
                    'errors' => $e->getMessage(),
                    'input' => $request->all()
                ]
            );
            return response()->json([
                'message' => 'Error sending message.',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Form sended successfully.',
            'data' => $data
        ], 200);
    }
}