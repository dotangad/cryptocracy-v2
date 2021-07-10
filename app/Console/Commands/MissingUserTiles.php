<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\UserTile;
use Illuminate\Console\Command;

class MissingUserTiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'missing:usertiles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create missing UserTiles';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $users = User::get();
        foreach ($users as $user) {
            if (!$user->user_tile) {
                $ut = new UserTile();
                $ut->user_id = $user->id;
                $ut->tile_id = $user->tile_id;
                $ut->save();
                $this->info('Creating user tile for ' . $user->username);
            }
        }
    }
}
