Portfolio
===================
Last Update : Jul 6, 2022

Created a simple portfolio with a REST API that can be used to store and fetch data. 

## Technology Stack
1. Client : React
2. API Server : Node Express
3. Database : Mongo
4. Server : Nginx


## Pre-requisite
Install [Docker](https://docs.docker.com/get-docker/)


## Installation

To start service running on [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

```
git clone https://github.com/yoon-yk/portfolio
cd portfolio
docker-compose up --build
```

## API

An endorsement is a JSON
hash like so:

```json
{
  "regdate": {
    "$date": {
      "$numberLong": "1657025273538"
    }
  },
  "name": "John",
  "title": "Manager",
  "content": "test",
}
```
### API Stack

```
GET /endorsements
    Retreive endorsement record or 404 if error occurs.
```

```
POST /endorsements
    Creates a new endorsement record. The body of the request should be a valid user
    record. Successful POSTs will return a 201. Otherwise, it returns 500. 
```

### Preview
![preview](https://github.com/yoon-yk/portfolio/blob/main/portfolio.png?raw=true)
