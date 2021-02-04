<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'web'], function () {
    Route::get('/', [HomeController::class, 'index']);
    Auth::routes();
    Route::get('/home', [HomeController::class, 'index'])->name('home'); 
});

Route::get('/users', [UsersController::class, 'index'])->middleware('auth');
Route::get('/users/new', [UsersController::class, 'new'])->middleware('auth');
Route::post('/users/add', [UsersController::class, 'add'])->middleware('auth');
Route::get('/users/edit/{id}', [UsersController::class, 'edit'])->middleware('auth');
Route::post('/users/update/{id}', [UsersController::class, 'update'])->middleware('auth');
Route::delete('/users/delete/{id}', [UsersController::class, 'delete'])->middleware('auth');