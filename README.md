# Skil - Learning status web application

Web application to keep track current learning status, with the form similar to a Kanban board and the user can create new card with responsive notification.

## Technologies used:

**Front-end:**

- React
- TypeScript
- Redux-toolkit
- TailwindCSS
- styled-components

**Back-end:**

- ExpressJS
- Mongoose
- Argon2
- JWT

**Database**
MongoDB

## New things I've learned:

- Clean project structure for both client (React, Redux) and server (Express, MongoDB)
- Config NoSQL database (MongoDB), create schemas using ORM
- Understand MVC and REST API concepts
- Using utility-first CSS framework(TailwindCSS) to build responsive website (I like it very much!)
- Using Redux-toolkit and RTK Query for state management and do API calls.
- Basic setup for deployment to Heroku and Netlify

## Install project

##### Create new MongDB cluster

1. Create shared cluster
2. Choose "Connect" on newly created cluster
3. Choose Node.js and version 4.1 or later
4. Copy the connection string and replace "username" and "password" with credentials of the cluster

##### Clone project from GitHub

```bash
git clone "https://github.com/nguyenfamj/MERN_Skil.git"
cd server
npm install
```

##### Create .env file based on the .env.example file

```
# .env
...
MONGODB_URI=mongodb+srv://<username>:<password>@mern-sticki.9o6su.mongodb.net/?retryWrites=true&w=majority
<!-- Change MONGODB_URI value to your customized connection string -->
```

##### Start the client

```bash
cd ..
cd client
npm install
npm run start
```
