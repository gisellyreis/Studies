@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><a href="{{ url('users') }}">Voltar</a></div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @if( Request::is('*/edit/*'))
                    <form action="{{ url('users/update') }}/{{ $user->id }}" method="post">
                    @csrf
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name: </label>
                            <input type="text" name="name" class="form-control" value="{{ $user->name }}">
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" name="email" class="form-control"  value="{{ $user->email }}">
                        </div>

                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>

                    @else 
                    <form action="{{ url('users/add') }}" method="post">
                    @csrf
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name: </label>
                            <input type="text" name="name" class="form-control" >
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" name="email" class="form-control"  >
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
