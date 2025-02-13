# Project: Sporting-Goods-(Server)

**Project Name:** Sporting-Goods-(Server)

**Project Task:** Building the Web app for a Sporting-Goods Shop.

**Project Motive:** Creating a backend system for a Sporting-Goods Shop, including Product and Order Management.

## Client Live Link

Click here to see the Client Side Live Link: [https://sporting-goods-client.vercel.app](https://sporting-goods-client.vercel.app)

## Server Live Link

Click here to see the Server Side Live Link: [https://sporting-goods-server-beige.vercel.app](https://sporting-goods-server-beige.vercel.app)

## Client Repository Link

Click here to see the Server Side Repository Link: [https://github.com/Bahauddin-Fahad/Sporting-Goods-Client](https://github.com/Bahauddin-Fahad/Sporting-Goods-Client)

## Project Features

1. **Product Add:** User Can add Product to the Database.
2. **Product Modify:** User Can update or Delete Product from the Database.
3. **Order Product:** User can order a product with quantity.

## Technologies

- TypeScript
- Express
- Cors
- Mongoose
- Zod
- dotenv
- http-status-codes
- eslint
- prettier
- vercel

## :link: How to run the application locally

### Step 1: Clone the Repository

Firstly, we have to clone the repository to our local machine using Git.

```node
git clone <repository-url>
```

### Step 2: Navigate to the Project Directory

We need to navigate to the cloned repository directory.

```node
cd <repository-name>
```

### Step 3: Install Dependencies

Then we have to install the project's dependencies using npm.

```node
npm install
```

This command reads the package.json file in the project directory and installs all the required packages from the npm registry. With this command, node_modules will be installed.

### :arrow_forward: Step 4: Set up the `.env` File

Next, we will create a .env file in the root directory of our project. This file will hold the environment variables. `.env` file will look like this:

```node
PORT=5000
DATABASE_URL=mongodb://localhost:27017/mydatabase
```

We need to ensure that these variables are correctly referenced in our application, typically in a configuration file which is under `./src/config` folder named as `index.ts`.

### Step 5: Start the Server

To run our Express.js application, we will use the following command:

```node
npm run start:dev
```

### Step 6: Access the Application

Once the server is running, we can access the application by navigating to `http://localhost:<port>` in web browser. We have to replace the `<port>` with the port number specified in the .env file.

---

So, these are the steps to run an expressJs application locally.
