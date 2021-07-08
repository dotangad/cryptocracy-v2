<?php

namespace Database\Factories;

use App\Models\Tile;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $r = rand(0, 2);

        switch ($r) {
            case 0:
                return [
                    'content' => $this->faker->sentences(5, true),
                    'type' => 'STORY',
                ];
                break;
            case 1:
                return [
                    'content' => $this->faker->sentences(1, true),
                    'type' => 'SIDEQUEST',
                ];
                break;
            case 2:
                return [
                    'content' => $this->faker->sentences(2, true),
                    'type' => 'LEVEL',
                    'points' => 300,
                    'solution' => 'verylonganswer'
                ];
                break;
        }
    }
}
