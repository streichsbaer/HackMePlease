# HackMePlease

Being lightweight, fast, and scalable, Node.js is becoming a widely adopted platform for developing web applications. 

##### Default user accounts
The database comes pre-populated with these user accounts created as part of the seed data -
* Admin Account - u:admin p:Admin_123
* User Accounts (u:user1 p:User1_123), (u:user2 p:User2_123)
* New users can also be added using the sign-up page.

## How to Setup Your Copy of HackMePlease

### OPTION 1 - Run HackMePlease on your machine

Please follow these steps to setup and run it locally -
* Install [Node.js](http://nodejs.org/) - HackMePlease requires Node v4.4 or above

* Clone the github repository
```
git clone https://github.com/streichsbaer/HackMePlease.git
```

* go to the directory
```
cd HackMePlease
```

* Install node modules
```
npm install
```

* Create Mongo DB:
    You can create a remote MongoDB instance or use local mongod installation
    * A. Using Remote MongoDB
        * Create a sandbox mongoDB instance (free) at [MongoLab](https://mongolab.com/plans/pricing/)
        * Create a new database.
        * Create a user.
        * Update the `db` property in file `config/env/development.js` to reflect your DB setup. (in format: `mongodb://<username>:<password>@<databasename>`)
    * OR B.Using local MongoDB
        * If using local Mongo DB instance, start [mongod](http://docs.mongodb.org/manual/reference/program/mongod/#bin.mongod).
        * Update the `db` property in file `config/env/development.js` to reflect your DB setup. (in format: `mongodb://localhost:27017/<databasename>`)

* Populate MongoDB with seed data required for the app
    * Run the npm-script below to populate the DB with seed data required for the application. Pass the desired environment as argument. If not passed, "development" is the default:
```
npm run db:seed
```
* Start server, this starts the HackMePlease application at url [http://localhost:4000/](http://localhost:4000/)
```
npm start
```

### OPTION 2 - Run HackMePlease on Docker

**You need to install [docker](https://docs.docker.com/installation/) and [docker compose](https://docs.docker.com/compose/install/) to be able to use this option**

The repo includes the Dockerfile and docker-compose.yml necessary to setup the app and the db instance then connect them together.

* Change the db config in `config/env/development.js` to point to the respective Docker container.
```
db: "mongodb://mongo:27017/hackmeplease",
```
* Build the images:
```
docker-compose build
```
* Run the app:
```
docker-compose up
```

## License
Code licensed under the [Apache License v2.0.](http://www.apache.org/licenses/LICENSE-2.0)
