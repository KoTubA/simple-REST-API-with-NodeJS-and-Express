# Simple REST API with NodeJS and Express

## Description

Api using sample user data that allows you to download, add, edit and delete json file data. An [express-validator](https://github.com/express-validator/express-validator) is used to validate the submitted data.

The example object looks as follows:

```json
{
    "id": 1,
    "first_name": "Orion",
    "last_name": "Gates",
    "email": "ogates0@dell.com",
    "gender": "Genderfluid"
}
```

## Implemented endpoints:

| Path     | Method | Description                 |
| -------- | ------ | --------------------------- |
| /api     | GET    | returns a list of all users |
| /api/:id | GET    | returns a single user       |
| /api     | POST   | adds a single user          |
| /api/:id | PUT    | edits data of a single user |
| /api/:id | DELETE | removes a single user       |

## How to run?

**1. Clone this repository:**

```
git clone https://github.com/KoTubA/simple-REST-API-with-NodeJS-and-Express.git
```

or:

```
git clone git@github.com:KoTubA/simple-REST-API-with-NodeJS-and-Express.git
```

**2. Install dependencies:**

```
npm install
```
