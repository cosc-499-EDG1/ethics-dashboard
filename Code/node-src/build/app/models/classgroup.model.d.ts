import { Model } from 'sequelize-typescript';
import Account from './account/account.model';
export default class ClassGroup extends Model {
    id: number;
    code: string;
    name: string;
    instructors: Account[];
    teaching_assistants: Account[];
    students: Account[];
    createdAt: Date;
    updatedAt: Date;
}
