<?php

namespace App\Console\Commands;

use App\Models\Files_path_name;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class PrintNews extends Command
{
    protected $signature = 'print:news';
    protected $description = 'any';

    public function handle(): void
    {
        $news = Storage::allFiles('portfolios/fas');
        foreach ($news as $item) {
            Files_path_name::create(['path' => basename($item)]);
        }
    }
}
