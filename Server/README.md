
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


