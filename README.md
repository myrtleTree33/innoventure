NUS InnoVenture 2015 Website
==================================================

## Introduction

This is the website for the 2015-2016 run of InnoVenture, the annual technopreneurship competition at NUS.


## Technical Requirements

- Computer running Linux
- NodeJS
- Meteor
- Meteor Up (`mupx`)


## Running the development environment

InnoVenture uses `iron-cli`, which wraps and scaffolds Meteor into an organizable format.  The instructions detail setting up the environment.

- Clone this repository.

    $ git clone git@github.com:myrtleTree33/innoventure.git

- Install Meteor.

    $ curl https://install.meteor.com/ | sh

- Install the Meteor scaffolder, `iron-cli`.

    $ npm install -g iron-meteor

- Copy the configuration files.  Please refer to the section, **copying the configuration files**.

- Navigate to the project directory, and run the development environment.

    $ cd <path-to-project-directory>
    $ iron


## Copying the configuration files

- Copy the templates at the following:
  - `config/development/settings.json.copy`
  - `config/production/settings.json.copy`
  - `config/production/mup.json.copy`

- Then, populate the keys.  Alternately, these can be obtained from Prof. Vinod.


## Uploading remote site

- InnoVenture uses `mupx` for uploading to a remote site.  This avoids the need to configure the server manually, and can be run on your current development machine.

- Ensure that you have the required `mup.json` defined in `config/production/mup.json`.  Then run

    $ iron mup prod


## Bugs

Please use the bug-tracker provided on this site.


## Credit

Done for and behalf of NUS InnoVenture by:

- TONG Haowen Joel
- Computer Engineering, Year 4
- National University of Singapore
- `me at joeltong dot org`
- www.joeltong.org
