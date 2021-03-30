![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

# Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

# Environment

Create a .env file with a MONGO_URI variable, it has to be a valid MongoDB connection string.

# Commands

## Dev

Dev commands runs app with nodemon

```bash
npm run dev
```

## Start

Start commands runs app with Node

```bash
npm start
```

# API routes and methods

- GET /users [x]

-- Sample response:

```json
[
  {
    "_id": "60632f626929e421913ec93f",
    "name": "Jorge Alberto",
    "lastName": "Serrano Paul",
    "email": "jserranopaul@gmail.com"
  },
  {
    "_id": "60632f766929e421913ec940",
    "name": "Alejandra",
    "lastName": "Morteo",
    "email": "email@gmail.com"
  }
]
```

- GET /users/:id [x]

-- Sample response:

```json
{
  "_id": "60632f626929e421913ec93f",
  "name": "Jorge Alberto",
  "lastName": "Serrano Paul",
  "email": "jserranopaul@gmail.com"
}
```

- POST /users [x]

-- Sample request:

```json
{
  "name": "Name",
  "lastName": "Lastname",
  "email": "email@gmail.com"
}
```

-- Sample response:

```json
{
  "name": "Name",
  "lastName": "Lastname",
  "email": "email@gmail.com",
  "_id": "6063302ee94f9f21d4e37a0d"
}
```
