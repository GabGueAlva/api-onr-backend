# API-ONR-BACKEND

## Description

This project is a backend API built using Node.js, Express, PostgreSQL with Sequelize as the ORM, and MongoDB for amenities and bookings. The API follows the Onion Architecture, enabling a modular design. The system includes a relational database structure with users, associations, and units, and a MongoDB setup for amenities and bookings. It manages many-to-many relationships between users and associations, as well as users and units.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Sequelize ORM**
- **MongoDB**
- **Mongoose** (for MongoDB interaction)

---

## Features

- **CRUD operations** for Users, Associations, Units, Amenities, and Bookings.
- **Many-to-many relationships** for Users and Associations, Users and Units.
- **MongoDB integration** for Amenities and Bookings, enabling flexible data storage.
- **Validation** to ensure relational integrity between PostgreSQL and MongoDB.
- **API documentation** using Postman for easy testing and usage.

---

## Installation

### 1. Clone the repository:

- git clone https://github.com/GabGueAlva/api-onr-backend.git
cd api-onr-backend

### 2. Configure the environment variables:

-Create a .env file in the root directory with the following:

DB_USERPOSTGRE=
DB_PASSWORDPOSTGRE=
DB_HOSTPOSTGRE=
DB_PORTPOSTGRE=
DB_DATABASEPOSTGRE=

MONGO_URI=

### 3. Run database migrations:

-npx sequelize db:migrate

### 4. Start the server:

-npm run dev
-npm i

---

### Postman Collection

The API endpoints are documented in Postman. You can import the provided Postman CRUD Postgre.postman_collection collection file into Postman to test the API.
The Postman collection file is included in the repository. You can import it into Postman CRUD API REST CRUD.postman_collection to test the API endpoints.

### Contact

Email:agabrielaguevaraa@hotmail.com

---

For any questions or suggestions, feel free to reach out to me.
