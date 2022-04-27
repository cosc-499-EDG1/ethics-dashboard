import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db } from './database';
import { Server } from 'http';

/* Import Routes Here */
import { accounts } from './routes/account.routes';
import { classGroups } from './routes/classgroup.routes';
import { dashboards } from './routes/dashboard.routes';
import { stakeholders } from './routes/stakeholder.routes';
import { deontologies } from './routes/deontology.routes';
import { careethics } from './routes/careethics.routes';
/* End Import Routes */

export const app = express();

export const initApp = async (): Promise<Server> => {
    //TODO: setup cors on deployment server
    const corsOptions = {
        origin:'*', 
        credentials: true,  
        optionSuccessStatus: 200,
    };

    app.use(cors(corsOptions));

    // parse requests of content-type - application/json
    app.use(bodyParser.json({ limit: '16MB' }));

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    //Init DB - uncomment the await db.sync() once you want to keep data in the DB.
    // remember to comment the "force: true" one afterwards
    await db.sync();
    // await db.sync({ force: true });

    /* Routes */
    app.use('/api/account', accounts);
    app.use('/api/groups', classGroups);
    app.use('/api/dashboard', dashboards);
    app.use('/api/stakeholders', stakeholders);
    app.use('/api/deontology', deontologies);
    app.use('/api/care-ethics', careethics);
    /* End Routes */

    const PORT = process.env.PORT || 8080;
    return app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
};
