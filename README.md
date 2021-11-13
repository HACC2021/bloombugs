# bloombugs

Hello and welcome to our HACC submission for 2021. Our group name is Bloombugs and consists of Jacob Hardy, Taryn Takebayashi, Kiana Walters, Kelly Hwang, and Kylie 
Higashionna. For our challenge, we selected the HMAR Reporting application and used Meteor, Mongo, Semantic UI/React, and hosted on a Digital Ocean droplet.

## Instructions
You can access the current deployment via Digital Ocean at: http://147.182.184.239/
To run the app, you will want to clone the repository to your local PC or Mac. Make sure that you clone it in an easy to find location. Next, open either your Terminal 
if you are on Mac or Command Shell if you are on PC. Next, you will want to get to the directory in Terminal or the Command Shell. In the Terminal/Command Shell type in 
"cd" and then the path to the folder that the cloned repo is in. For example mine is in my bloombugs folder so I would type "cd documents/github/bloombugs" and hit enter.
Once in the folder, you need to find the app folder which should be in the folder of the repo. For this application, you need to cd into bloombugs-kahukai as well. For
my directory, I would type in "cd documents/github/bloombugs/bloombugs-kahukai/app". It will look a bit different depending on where you saved it. After you cd into the app
folder, you will need to type in "meteor npm install". That will install meteor into the app folder so that you can run the application. Once done, type in "meteor reset". This will reset the database, but also initialize the default users: 1) john (john@foo.com) and 2) an administrative user (admin@foo.com). The passwords for these two accounts are both "changeme" right now, but we will be making the app more secure in the next interation. We used easy passwords now for ease of development. Now, type in "meteor npm run start" and the program will be running. When it says "App running at: http://localhost:3000/", your application is running successfully. Copy the part where it says "http://localhost:3000/"
to your web browser and hit enter. That should bring up the application succesfully. 

## Security and Privacy
The biggest security and privacy component to the app is maintaining the animals privacy by protecting their location. The public users will not be able to access any animal reports whereas HMAR admin users will be able to log in and view every report and location. By creating an admin role and only allowing the admin roles to access the submitted dataset we will hopefully reduce traffic around the animals from the curious public. Also, as the app does not require the public user to download an app, log in, nor requests location tracking, there is not much privacy of the user that is being violated.
 

