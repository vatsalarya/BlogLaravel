<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;
// use Faker\Generator as Faker;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1,10),
            'title' => $this->faker->sentence(),
            'body' => $this->faker->paragraph($nbSentences = 70, $variableNbSentences = true),
        ];
    }
}
