### Developing React Frontend
1. Running Development Server

```bash
npm start
```
This will start the development server, which will auto-refresh on any changes making it easy to code and see your changes in real time.

2. Creating a Store

Stores are used for fetching and storing data from the backend server, the nice thing about a store is it can be used in multiple components. This is a good way to keep your data in one place without needing to fetch it on every page.

    - I recommend you create the model on the backend before creating the frontend store so you can easily type the data you'll be working with. (See `Account` type in account.store.ts)

    - Models can be imported from the backend and used as types (seen in `account.store`) or you can create your own type but it will not be kept in sync with the backend.

    - Stores don't nesscesarily need to fetch data from the backend, they can be used to store data that just needs to be persistent between pages.

3. Creating a Service

Services are used to connect the routes on the backend with functions on the frontend. `account.service` shows an example. Note the different types of HTTP requests you can perform here (GET, POST, PUT, DELETE).

4. Using store in a component

```
import { useStoreActions, useStoreState } from "../../stores/index.store";

.
.
.

const login = useStoreActions((actions) => actions.accounts.login);
const isLoggedIn = useStoreState((state) => state.accounts.isLoggedIn);
```
As you can see, the store actions(thunks included) and state can be imported into any component and used as needed. These should be fully typed to make development easier.


Make sure to add any new stores to index.store.ts and include it in the definition. Or else you will not be able to use it.
