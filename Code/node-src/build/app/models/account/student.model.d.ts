import { Model } from 'sequelize-typescript';
import Account from './account.model';
import ClassGroup from '../classgroup.model';
export default class Student extends Model {
    studentId: number;
    student: Account;
    classId: number;
    classGroup: ClassGroup;
}
