<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Car;

class CarsController extends Controller
{
    public function __constructor()
    {
        $this->cars = $cars;
    }

    public function getAll() {
        $cars = Car::query()->get();
        // dd($cars->count());
        // $cars = DB::table('cars')->get()[0];
        return response()->json($cars, 200);

    }

    public function get($id)
    {
        $car =Car::where('id', $id)->first();
        return $car;
    }
}
