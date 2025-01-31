API-ONR-BACKEND

Description

This project is a backend API built using Node.js, Express, and PostgreSQL with Sequelize as the ORM. The API follows the Onion Architecture and includes a relational database structure with users, associations, and units, as well as many-to-many relationships between them.

Technologies Used

Node.js

Express.js

PostgreSQL

Sequelize ORM


Features

CRUD operations for Users, Associations, and Units

Many-to-many relationships for Users and Associations, Users and Units

Validation to ensure relational integrity

API documentation using Postman

Installation

Clone the repository:

(https://github.com/GabGueAlva/api-onr-backend.git)
cd project-name

Install dependencies:

npm install

Configure the environment variables:
Create a .env file in the root directory with the following:

DB_USERPOSTGRE=
DB_PASSWORDPOSTGRE=
DB_HOSTPOSTGRE=
DB_PORTPOSTGRE=
DB_DATABASEPOSTGRE=

Run database migrations:

npx sequelize db:migrate

Start the server:

npm start

API Endpoints

The API endpoints are documented in Postman. You can import the provided Postman CRUD Postgre.postman_collection collection file into Postman to test the API.

Postman Collection

The Postman collection file is included in the repository. You can import it into Postman CRUD Postgre.postman_collection to test the API endpoints.

Contact

Email:agabrielaguevaraa@hotmail.com

For any questions or suggestions, feel free to reach out to me.
