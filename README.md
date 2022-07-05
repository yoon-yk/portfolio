Portfolio
===================
Last Update : Jul 6, 2022

Implements a REST service that can be used to store and fetch endorsement data. 

An endorsement is a JSON
hash like so:

```json
{
  "regdate": {
    "$date": {
      "$numberLong": "1657025273538"
    }
  },
  "name": "John",
  "title": "Manager",
  "content": "test",
}
```

The spec for the REST service is defined below.


## Pre-requisite
Install [Docker](https://docs.docker.com/get-docker/)


## Installation

To start service running on [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

```
git clone https://github.com/yoon-yk/portfolio
cd portfolio
docker-compose up --build
```

## API SPEC

```
GET /endorsements
    Retreive endorsement record or 404 if error occurs.
```

```
POST /endorsements
    Creates a new endorsement record. The body of the request should be a valid user
    record. Successful POSTs will return a 201. Otherwise, it returns 500. 
```