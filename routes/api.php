<?php

use App\Http\Controllers\GetNewsController;
use App\Http\Controllers\GetNewsItemController;
use App\Http\Controllers\GetPortfolioDocumentController;
use App\Http\Controllers\GetPortfoliosController;
use App\Http\Controllers\GetServicesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get("services", GetServicesController::class);
Route::get("portfolios", GetPortfoliosController::class);
Route::get("portfolios/document", GetPortfolioDocumentController::class);
Route::get("news", GetNewsController::class);
Route::get("news/news_item", GetNewsItemController::class);
