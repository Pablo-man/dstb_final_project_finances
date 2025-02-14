# TransactionMonolitic

## Overview
TransactionMonolitic is a Node.js-based application that leverages Express.js, GraphQL, and MongoDB for handling transactions in a monolithic architecture.

## Features
- Express.js for server handling
- GraphQL API implementation
- MongoDB for data storage
- Middleware authentication
- CORS and cookie parsing support
- Logging with Morgan

## Prerequisites
Ensure you have the following installed before running the project:
- Node.js (>=16.x)
- MongoDB

## Installation
Clone the repository and install dependencies:
```sh
npm install
```

## Running the Application
### Development Mode
```sh
npm run dev
```
### Production Mode
```sh
npm start
```

## API Endpoints
The application exposes a GraphQL API accessible at:
```
http://localhost:5001/graphql
```

## Environment Variables
Ensure you have the required environment variables set up in a `.env` file.

## Docker Support
A `Dockerfile` is included for containerized deployment.
To build and run the container:
```sh
docker build -t transactionmonolitic .
docker run -p 5001:5001 transactionmonolitic
```

## Dependencies
Key dependencies used in the project:
- Express
- GraphQL
- Mongoose
- Morgan
- CORS
- Cookie-parser

Check `package.json` for the full list of dependencies.

## License
This project is licensed under the ISC License.