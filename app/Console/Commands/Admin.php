<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class Admin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin {users*}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Upgrade users to admin';

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
     * Make user admin
     *
     * @return void
     */
    public function make_admin(String $email)
    {
        $user = User::where('email', $email)->first();

        if (!$user) {
            echo 'User ' . $email . ' not found. Skipping.' . PHP_EOL;
            return;
        }

        $user->admin = 1;
        $user->save();
        echo 'User ' . $email . ' made admin.' . PHP_EOL;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $users = $this->argument('users');
        foreach ($users as $user) {
            $this->make_admin($user);
        }
        return 0;
    }
}
