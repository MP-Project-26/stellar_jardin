<?php

namespace App\Http\Controllers;

use App\Models\Categories_galleries;
use App\Models\Galleries;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;


class ContentController extends Controller
{
    public function index()
    {
        //Pagination

        $galleries = Galleries::with('category')->paginate(5);
        return Inertia::render('admin/content/Index', [
            'title' => 'Managaement Content',
            'galleries' => $galleries
        ]);
    }

    public function search(Request $request)
    {
        $searchTerm = $request->input('query');

        $query = Galleries::with('category');

        if ($searchTerm) {
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'LIKE', '%' . $searchTerm . '%')
                    ->orWhereHas('category', function ($q) use ($searchTerm) {
                        $q->where('category_name', 'LIKE', '%' . $searchTerm . '%');
                    });
            });
        }

        $galleries = $query->paginate(5);

        return response()->json([
            'galleries' => $galleries
        ]);
    }



    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_gallery_id' => 'required',
        ]);


        $image = $request->file('image');
        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('assets/img/gallery'), $imageName);

        $gallery = new Galleries();
        $gallery->title = $request->input('title');
        $gallery->image = $imageName;
        $gallery->category_gallery_id = $request->input('category_gallery_id');
        $gallery->save();


        return response()->json([
            'message' => 'Penambahan Foto Galleri Berhasil',
        ]);

    }

    public function show($id)
    {
        //
    }

    public function edit(Request $request, string $id, $paging)
    {
        $gallery = Galleries::with('category')->findOrFail($id);
        $category = new Categories_galleries;
        $category = $category->all();

        return Inertia::render('admin/content/EditGalleri', [
            'title' => 'Edit Galleri',
            'gallery' => $gallery,
            'category' => $category,
            'paging' => $paging
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'category_gallery_id' => 'required|exists:categories_galleries,id',
        ]);



        $gallery = Galleries::findOrFail($id);

        $gallery->title = $request->input('title');
        $gallery->category_gallery_id = $request->input('category_gallery_id');

        if ($request->hasFile('image')) {
            // Hapus gambar lama
            $oldImagePath = public_path('assets/img/gallery/' . $gallery->image);
            if (File::exists($oldImagePath)) {
                File::delete($oldImagePath);
            }

            // Upload gambar baru
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('assets/img/gallery'), $imageName);
            $gallery->image = $imageName;
        }


        $gallery->save();

        return response()->json([
            'message' => 'Data Galleri Berhasil Diubah',
        ]);
    }



    public function destroy($id)
    {
        $gallery = Galleries::findOrFail($id);

        // Hapus gambar dari storage
        $imagePath = public_path('assets/img/gallery/' . $gallery->image);
        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }

        $gallery->delete();

        return response()->json([
            'message' => 'Data Galleri berhasil dihapus',
        ]);
    }
}
