import { Model } from 'sequelize-typescript';
import Account from './account.model';
import ClassGroup from '../classgroup.model';
export default class TeachingAssistant extends Model {
    taId: number;
    account: Account;
    classId: number;
    classGroup: ClassGroup;
}
