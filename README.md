# Koger Center App

## Project Description
This app will help users find their seats in the Koger Center as well as provide other services relevant to the Koger Center and their showings.
[Description Page](https://github.com/SCCapstone/Koger/wiki/Project-Description).

## Technologies
This project has the following dependencies:  
* [Ionic Framework](https://ionicframework.com/)
* [Node.js](https://nodejs.org/en/)

Google Firebase is used for our backend database:
* [Google Firebase](https://firebase.google.com/)

## External Requirements
In order to build this project, you will need:
* [Node.js](https://nodejs.org/en/)

## Setup
To set up your environment to run this project, you will need to:
* Make sure your computer has Node.js installed (Linked above)
* Install the Ionic CLI from the command line with `npm install -g @ionic/cli`
* Install Angular through npm from the command line with `npm install @ionic/angular@latest --save`
* Clone this repository: `git clone https://github.com/SCCapstone/Koger.git`
* Run `npm install` in a terminal from the project root

## Running
To launch the app, run the following command in a terminal from the project root:
* `ionic serve`

This command will serve the app on a port and open it in a web browser.

# Deployment
Deploying the app is made easy using Ionic Framework and [Android Studio](https://developer.android.com/studio) 
* Run `ionic build` in a terminal from the project root
* Run `npx cap sync` in a terminal from the project root
* Run `npx cap copy android` in a terminal from the project root
* Run `npx cap open android` in a terminal from the project root
* Following the last command Android Studio will open if installed, then the app can be built and deployed through the standard Android Studio workflow

# Testing

### Unit Testing
Unit tests can be executed by running the following command in a terminal from the project root:
* `npm test`

The results of these tests are printed out in the browser the testing software opens and in the terminal.

### Behavior Testing
Behavior tests can be executed by running the following command in a terminal from the project root:
* `npm run e2e`

This command will open up a browser which will very quickly simulate an user clicking through the app.
The results of the test are printed out in the terminal once completed.

# Authors
James Cochran - jdc7@email.sc.edu<br />
Joshua Acree - jgacree@email.sc.edu<br />
Tyler Beagle - wbeagle@email.sc.edu; tylerbeagle34@gmail.com<br />
Justin Brown - justinhb@email.sc.edu<br />
Devon Harant - dharant@email.sc.edu; devharant@gmail.com
