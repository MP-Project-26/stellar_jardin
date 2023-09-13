<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {

        if (request()->isMethod('post')) {
            return [
                'title' => 'required|string|max:258',
                'author' => 'required|string|max:258',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'content' => 'required|string|max:258',
                'tags' => 'string|max:258',
                'comments' => 'string|max:258',
                'views' => 'string|max:258',
            ];
        } else { 
            return [
                'title' => 'nullable|string|max:258',
                'author' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'content' => 'nullable|string',
                'tags' => 'nullable|string|max:258',
                'comments' => 'nullable|string',
                'views' => 'nullable|string|max:258',
            ];
        }
    }
    public function messages()
    {
        if (request()->isMethod('post')) {
            return [
                'title.required' => "title is required!",
                'author.required' => "author is required!",
                'image.required' => "image is required!",
                'content.required' => "content is required!",
            ];
        } else {
            return [
                'title.required' => "title is required!",
                'author.required' => "author is required!",
                'content.required' => "content is required!",
            ];
        }
    }
}
