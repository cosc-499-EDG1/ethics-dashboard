# ethics-dashboard

## Getting Started

We have two separate runtimes in this project, node-src is for the backend framework with Express, Sequelize and MySQL. While react-src contains the frontend framework of React, React Redux, and React Router.

## Local Requirements

1. Node.js 14.X
2. NPM package manager
3. MySQL DB (MariaDB via Docker preferred)


### Creating Database

1. Use the command `docker run -p 3306:3306 --name cosc499-db -v $HOME\Documents\499\:/sql -e MYSQL_ROOT_PASSWORD=password -d mariadb` to create the Docker container.
2. Run the container via GUI or `docker start cosc499-db`
3. You may need to connect via MySQL Workbench or DBForge to create the schema, however the node application should do the rest for you.

### Running Node Application

1. Open `node-src` in the terminal.
2. Run `npm install` to install node.
3. Run the node application with `npm run dev-server` in the terminal.
4. If you get SequelizeConnectionError: Unknown database 'cosc499', use MySQL Workbench or DBForge to create the `cosc499` schema.

Guide for using SequelizeTS: https://www.npmjs.com/package/sequelize-typescript

#### Running Node Tests
1. Open `node-src` in the terminal.
2. Run `npm run test` to run the tests.
3. If you have database errors, make sure you don't have any other instance of the app running.

### Running React Application

1. Open `react-src` in the terminal.
2. Run `npm install` to install dependencies.
3. Run `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9` to install TailwindCSS
4. Run the react dev environment with `npm start` in the terminal.
5. In the future, run `npm test` to run the tests.
