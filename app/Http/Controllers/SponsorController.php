<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use \TANIOS\Airtable\Airtable;

class SponsorController extends Controller
{
    public function show()
    {
        return Inertia::render('SponsorUs');
    }

    private function add_to_airtable($name, $contact, $desc)
    {
        $airtable = new Airtable(array(
            'api_key' => env('AIRTABLE_API_KEY'),
            'base'    => env('AIRTABLE_BASE_ID')
        ));


        return $airtable->saveContent(
            'Companies',
            [
                'Company' => $name,
                'Contact' => $contact,
                'Description' => $desc
            ]
        );
    }

    private function send_to_discord($name, $contact, $desc)
    {
        // Send to Discord
        $discord_body = <<<EOD
            {
              "embeds": [
                {
                  "title": "New Sponsor Interested",
                  "type": "rich",
                  "fields": [
                    {"name": "Name", "value": "$name" },
                    {"name": "Contact", "value": "$contact" },
                    {"name": "Description", "value": "$desc" }
                  ],
                  "url": "https://airtable.com/tbldLGZYEmsgpfO2y/viwxQC1ZS9pmbu73P?blocks=hide",
                  "thumbnail": {
                    "url": "https://cryptichunt.com/img/footer-logo-white-bg.png",
                    "height": "50",
                    "width": "50"
                  }
                }
              ]
            }
        EOD;

        return Http::withBody($discord_body, "application/json")->post(env('DISCORD_WEBHOOK_URL'));
    }

    public function create(Request $req)
    {
        $req->validate([
            'Name' => ['required'],
            'Contact' => ['required'],
            'Description' => ['required'],
        ]);

        $body = $req->all();

        $this->add_to_airtable($body['Name'], $body['Contact'], $body['Description']);
        $this->send_to_discord($body['Name'], $body['Contact'], $body['Description']);


        return Inertia::render('SponsorUs', ['success' => true]);
    }
}
