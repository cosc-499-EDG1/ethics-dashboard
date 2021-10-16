Identify the tech stack you plan to use. If this is the tech stack required by your client, then state that in the document. If your client is flexible, you must indicate a clear rationale of the choice made. This means an extra page with a table of at least 3 options and document all pros and cons for each before letting your client make a choice.

- React for frontend framework
- This will let us expand into using React Native for future mobile versions easily
- Redux will handle state management
- Hope to use NodeJS for backend running in a docker container
- ExpressJS and JWT for authentication
- MySQL Database

Our client is flexible, so we were given the choice of what framework to use. 

## ReactJS + Express + Sequelize
- Pros:

Expandable

Widely supported 

Supports TSX

Many plugins for common functions

API based for easy workflow

Sequelize ORM for simple database creation and replication


- Cons:

Can be complicated to get setup

High learning curve

Requires many plugins to be fully functional

## VueJS + Express + Sequeilize

- Pros:

Simple

Easy to learn

Expands on HTML, so basic CSS is easy to integrate

- Cons:

Not as expandable as ReactJS

Vue is not widely used so long term support may be hard to come by

## Pure HTML + PHP

- Pros:

Full control over every aspect of the frontend site

Basic syntax will make it supported for a long time

Can always be replaced later because of the simple layout

- Cons:

Outdated and out of shape

Not very dynamic and expandable

No simple plugin system for adding things like a carousel or slider.

PHP may be hard to maintain for newer developers.


## Script:

Finally, I will go over the tech stack we are going to use.

For both the frontend and backend our client was fairly flexible, however we are limited by the existing hosting choice with CPanel integration. Because of the environmental constraints, services like Firebase and Azure were not able to be used for quick and easy development.

The database we will use will be a simple MySQL one, since the client’s host already provides setup and backups. Next, the backend API will be running ExpressJS with Sequelize. Sequelize is an object relational mapping for MySQL that will let us do all database integration in code, making it simple to install and move between any server setup. 

The express API will integrate with React via GET and POST routes. For user authentication and login, JWT will be the simplest and safest option to use. Both Sequelize and Express run in NodeJS and will need to have redundant saving regarding student data inputs in case of any API failures.

Finally, React will be used for the frontend. This will offer the most flexibility along with a great learning experience utilizing plugins like redux and routing. Since the client has requested a mobile app in the future, React will also play well with React Native, which can be used to easily extend into a mobile application.

That concludes our presentation regarding the ethics dashboard, thank you for watching.
