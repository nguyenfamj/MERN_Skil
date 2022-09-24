# Skil - Learning status web application

Web application to keep track current learning status, with the form similar to a Kanban board and the user can create new card with responsive notification.

You can take a look at the deployed project here: <https://skil.netlify.app/>

## Preview:

##### Preview video
https://user-images.githubusercontent.com/86949613/192109180-b0cf32ed-d2b0-4369-acc4-d786a4faf743.mp4


##### Register screen with validation
<img width="1552" alt="Screenshot 2022-09-24 at 19 46 20" src="https://user-images.githubusercontent.com/86949613/192109423-c84c1992-eaca-4a2e-9586-d72e5c4058a3.png">

##### Login screen
<img width="1552" alt="Screenshot 2022-09-24 at 20 09 36" src="https://user-images.githubusercontent.com/86949613/192110356-c28ebb24-e839-4571-b0e9-3ed1541ade5c.png">

##### Dashboard with "Login successfully" notification
<img width="1552" alt="Screenshot 2022-09-24 at 20 08 43" src="https://user-images.githubusercontent.com/86949613/192110403-dc7717f5-5489-4896-86a2-6f7f5d13b700.png">

##### Create new card
<img width="1552" alt="Screenshot 2022-09-24 at 20 29 14" src="https://user-images.githubusercontent.com/86949613/192111111-acb9f1b3-0670-47be-9ce6-fd392759f5cf.png">

##### Card list
<img width="1552" alt="Screenshot 2022-09-24 at 20 30 26" src="https://user-images.githubusercontent.com/86949613/192111143-9d743672-817f-4246-bf38-78d123c4cb18.png">

##### "More" dropdown includes edit and delete functions
<img width="1552" alt="Screenshot 2022-09-24 at 20 30 46" src="https://user-images.githubusercontent.com/86949613/192111160-436b64be-6909-4263-8aa1-dcf288631a67.png">


## 💡Technologies used:

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

Enjoy the application!
