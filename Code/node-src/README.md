### Developing Node Backend

I have tried to make it as easy as possible to modify the database values without needing to do any funky migration management at the moment.

The backend follows similar logic to a model-view-controller (MVC) architecture. The `*.model` file is the database table itself which defines the types of each value.

The `*.routes` file is the API routes which define the endpoints and the functions to be called when the endpoint is called.

And finally the `*.controller` file is for the functions that are called when the routes are called, to handle the logic when interacting with the database.

The backend framework is using sequelize-typescript, I recommend reading https://www.npmjs.com/package/sequelize-typescript

### I highly recommend you create tests for your routes + database calls as it will help debug any issues you may have when pushing to github. `account.test` is a good example.
