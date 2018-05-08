
Environemnt:
The code has been tested on a Windows 10 x64 machine. No guarantees that the development environment would work in other operating systems; hopefully it does

Currentyly we are using development environment. Note that in production environment, we should turn off console logs by changing
NODE_ENV_ENVIRONMENT to be 'production'


Security:
Currently the database name, username, and password are hard-coded but ideally secure data should be saved as environment variables.


Heroku:
To push only backend to heroku
git subtree push --prefix Server heroku master

To push and pull environment variables: 
heroku plugins:install heroku-config
cd Server
heroku config:push

To get logs 
heroku logs -t --app app-name

Mongodb scripts
db.users.ensureIndex({"meals.date" : 1})
db.users.ensureIndex({"meals._id" : 1})
db.users.ensureIndex({"googleId" : 1})
db.users.ensureIndex({"facebookId" : 1})


Add FB Login:
1. Go to https://developers.facebook.com/apps/ and add a Facebook Login product
2. Add the following Valid OAuth Redirect URIs
    1. https://localhost:4400/   for the the dev server
    2. https://caltrack-meals.herokuapp.com/  for the hosted app
    3. https://localhost:3001/  to test serving from the same backend server locally

Add Google Login:
1. Go to https://console.developers.google.com/apis/credentials
2. Add the same urls as hown above in "Authorized Javascript origins" section


Test 
For tests to work you need to have saved credentials for the fatabase for the an admin and a manager