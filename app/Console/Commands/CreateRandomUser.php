<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\UserTile;
use Database\Factories\UserFactory;
use Faker\Generator;
use Illuminate\Console\Command;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\Hash;

class CreateRandomUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create random user';

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
        $faker = Container::getInstance()->make(Generator::class);
        $password = $faker->password();
        $u = User::factory()->create([
            'password' => Hash::make($password)
        ]);

        $user_tile = new UserTile();
        $user_tile->user_id = $u->id;
        $user_tile->tile_id = 1;
        $user_tile->save();

        $this->info('Email: ' . $u->email);
        $this->info('Password: ' . $password);
    }
}
