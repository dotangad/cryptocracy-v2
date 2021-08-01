# Cryptocracy II

Platform for [Cryptocracy II](https://cryptichunt.com), the second iteration of an independent cryptic hunt organised by students from DPS Dwarka and DPS RK Puram.

The platform uses Laravel on the backend, React on the frontend, and Inertia.js to interface between them.

## Setup

1. Setup the app using the instructions in Laravel's [documentation](https://laravel.com/docs/8.x#your-first-laravel-project)
2. Run the migrations
   ```sh
   ./vendor/bin/sail migrate:fresh --seed
   ```
3. Fill out the `.env` file
   ```sh
   cp .env.example .env
   ```
4. Visit `http://localhost:7331/`, and login with the admin account (`admin@cryptichunt.com`, `password`)
