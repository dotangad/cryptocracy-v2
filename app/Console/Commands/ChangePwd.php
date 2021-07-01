<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class ChangePwd extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'changepwd {email} {new_password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change a user\'s password';

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
        $email = $this->argument('email');
        $pass = $this->argument('new_password');

        $user = User::where('email', $email)->first();

        if (!$user) {
            echo 'User ' . $email . ' not found.' . PHP_EOL;
            return 1;
        }

        $user->password = Hash::make($pass);
        $user->save();

        echo 'Password changed' . PHP_EOL;

        return 0;
    }
}
