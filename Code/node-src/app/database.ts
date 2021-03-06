import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config({ path: 'db.env' });

/* MODELS */
import Account from './models/account/account.model';
import ClassGroup from './models/classgroup.model';
import Student from './models/account/student.model';
import TeachingAssistant from './models/account/teaching_assistant.model';
import Instructor from './models/account/instructor.model';

import Dashboard from './models/dashboard.model';
import CaseOption from './models/option.model';
import Stakeholder from './models/stakeholder.model';
import Utilitarianism from './models/utilitarianism.model';
import Util_Opt_Analysis from './models/util_opt_analysis.model';
import MoralLaw from './models/morallaw.model';
import Care_Ethics_Options from './models/care_ethics_options.model';

/**
 * Models must also be added to this.
 */
const MODELS = [Account, ClassGroup, Student, Instructor, TeachingAssistant, Dashboard, CaseOption, Stakeholder, Utilitarianism, Util_Opt_Analysis, MoralLaw, Care_Ethics_Options];

const sequelize = new Sequelize(process.env.DB_NAME ?? 'cosc499', process.env.DB_USER ?? 'root', process.env.DB_PASSWORD ?? 'password', {
    host: process.env.DB_HOST ?? 'localhost',
    quoteIdentifiers: false,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    models: MODELS,
});

const db = sequelize;

export { db };
