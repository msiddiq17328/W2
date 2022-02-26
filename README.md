# searching
 node app

1) only backend is dockerized, can be run locally too, just need to switch between the host in env 
    (localhost, gateway.docker.internal, in case docker build again)
    docker ps
    docker build -t mybackend .
    docker build -t mybackend .
    docker run -d -p 8080:8080 mybackend
2) added few test with jest
3) have share the db create table file on github along with postman collection having 4 routes

further tests can be added, for running tests with jest run
npm test

for running, use 
create the mysql table, in the repo locally
npm install
nodemon is used for development purposes

I have added images, of both front end and backend running simultaneouly