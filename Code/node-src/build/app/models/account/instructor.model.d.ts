import { Model } from 'sequelize-typescript';
import Account from './account.model';
import ClassGroup from '../classgroup.model';
export default class Instructor extends Model {
    instructorId: number;
    instructor: Account;
    classId: number;
    classGroup: ClassGroup;
}
