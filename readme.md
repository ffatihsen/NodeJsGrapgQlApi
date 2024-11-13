# GraphQL API

This project is a simple API application built using **Node.js**, **Express.js**, and **GraphQL**. The API provides flexible querying with GraphQL, allowing clients to request specific data as needed. It also includes basic CRUD operations and integrates with a database for persistent storage.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)

---

## Features

- Flexible querying with GraphQL
- CRUD operations for managing data
- Schema definition and resolvers for GraphQL queries and mutations
- Error handling and structured responses
- Integration with a database for data persistence
- Uses **JSON Server** to simulate a database for development purposes

## Setup

To run this project on your local environment, follow these steps:

1. Clone this repository:
    ```bash
    git clone https://github.com/username/project_name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd project_name
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Start the JSON server:
    ```bash
    npx json-server --watch config/db.json --port 3001
    ```

   This command will start a mock database server using **JSON Server** that watches the `db.json` file for any changes and runs on port 3001.

5. Start the GraphQL API server:
    ```bash
    node src/index.js
    ```

   This command will start the GraphQL server on the port defined in your `src/index.js` (typically port 4000).


