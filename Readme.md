# Express.js Basics with Routing

## Student Information
* Student name: Mohamed Amine OUATAR
* Student ID: 101579629
* Course: COMP3123
* Exercise: Exec05

## Description

This exercise demonstrates the basics of Express.js and routing.

The project includes:

* Express.js routes
* Serving an HTML page
* Returning JSON data
* User login validation
* User logout
* Error handling
* Express Router

## Routes

### Home

**GET** `/home`

Returns the `home.html` page with the message:

`Welcome to ExpressJs Tutorial`

### Profile

**GET** `/api/v1/user/profile`

Returns the user information from `user.json` in JSON format.

### Login

**POST** `/api/v1/user/login`

Accepts a username and password in JSON format and checks if they are valid.

Example:

```json
{
  "username": "bret",
  "password": "bret@123"
}
```

### Logout

**GET** `/api/v1/user/logout?username=bret`

Returns a logout message for the specified username.

## Error Handling

The application uses Express error-handling middleware to handle server errors.

## How to Run

Install the dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

The server runs on port `8081`.

## Technologies Used

* Node.js
* Express.js
* JavaScript
* JSON
* HTML
