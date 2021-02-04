<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class UsersController extends Controller
{
    public function index() {
        $users = DB::select('select * from usuarios');

        return view('users.list', ['users' => $users]);
    }

    public function new() {
        return view('users.form');
    }

    public function add( Request $request ) {
        $user = new Usuario;
        $user = $user->create( $request->all() );

        return Redirect::to('/users');
    }

    public function edit($id) {
        $user = Usuario::findOrFail($id);

        return view('users.form', ['user' => $user]);
    }

    public function update( $id, Request $request ) {
        $user = Usuario::findOrFail($id);
        $user->update( $request->all() );

        return Redirect::to('/users');
    }

    public function delete( $id ) {
        $user = Usuario::findOrFail($id);
        $user->delete();

        return Redirect::to('/users');
    }
}
