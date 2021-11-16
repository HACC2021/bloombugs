# bloombugs

Hello and welcome to our HACC submission for 2021. Our group name is Bloombugs and consists of Jacob Hardy, Taryn Takebayashi, Kiana Walters, Kelly Hwang, and Kylie 
Higashionna. For our challenge, we selected the HMAR Reporting application and used Meteor, Mongo, Semantic UI/React, and hosted on a Digital Ocean droplet.

## Instructions
You can access the current deployment via Digital Ocean at: http://147.182.184.239/. The default temporary admin user for our development purposes is "admin@foo.com" and the password is "changeme." You can also login as the default regular user john@foo.com (password is also "changme"). John can input records, but he cannot see all of the records.
You can also create your own username and password by clicking on "Login" at the far right and choosing the "Sign up" option.

If you want to download our code and run our app locally, you will want to clone the repository to your local PC or Mac. Make sure that you clone it in an easy to find location. Next, open either your Terminal 
if you are on Mac or Command Shell if you are on PC. Next, you will want to get to the directory in Terminal or the Command Shell. In the Terminal/Command Shell type in 
"cd" and then the path to the folder that the cloned repo is in. For example mine is in my bloombugs folder so I would type "cd documents/github/bloombugs" and hit enter.
Once in the folder, you need to find the app folder which should be in the folder of the repo. For this application, you need to cd into bloombugs-kahukai as well. For
my directory, I would type in "cd documents/github/bloombugs/bloombugs-kahukai/app". It will look a bit different depending on where you saved it. After you cd into the app
folder, you will need to type in "meteor npm install". That will install meteor into the app folder so that you can run the application. Once done, type in "meteor reset". This will reset the database, but also initialize the default users: 1) john (john@foo.com) and 2) an administrative user (admin@foo.com). The passwords for these two accounts are both "changeme" right now, but we will be making the app more secure in the next interation. We used easy passwords now for ease of development. Now, type in "meteor npm run start" and the program will be running. When it says "App running at: http://localhost:3000/", your application is running successfully. Copy the part where it says "http://localhost:3000/"
to your web browser and hit enter. That should bring up the application succesfully. 

## Security and Privacy (295 words)
One of HMAR's key concerns about a web app is that they don't want the app to be used for nefarious purposes, where members of the public try to track down animals by location. We addressed this issue with our Kahukai app by making it so only the administrative users (i.e. HMAR staff) could view the sighting records. Users can register and login to the app. But they cannot see the record once they submit it. Only admins can see the reports:user info in a single report is protected (i.e. their name, phone number, and the location they saw the animal).

To protect public user info, all users must login with a password that they submitted upon registering. So, no one can get to any other users info except for the administrators (HMAR). The public user's account(s) do not store info about the user. Logging in only allows the user to report a sighting. But, having the user sign in with a password reduces the chance of people trying to attack the data by making spurious entries.

Our Mongo database that stores the data resides on the servers that Digital Ocean provides. Unauthorized users cannot see the database because it is protected by Digital Ocean's password system. Since the underlying database is a NoSQL database, the application is not susceptible to SQL injection. Since we are only storing JSON data, then there is low risk of any kind of JavaScript injection. 

In the future, we would like to set it up so the app uses HTTPS/SSL. So, that when someone submits with their cellphone, and the transmission is intercepted, the transmissions would be encrypted. Our app could also be made more secure if we were able to add multi-factor authentication for the administrative users.


