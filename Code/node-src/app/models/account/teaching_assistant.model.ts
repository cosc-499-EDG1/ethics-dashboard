import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Account from './account.model';
import ClassGroup from '../classgroup.model';

@Table
export default class TeachingAssistant extends Model<TeachingAssistant> {
    @ForeignKey(() => Account)
    @Column
    taId: number;

    @BelongsTo(() => Account, 'taId')
    account: Account;

    @ForeignKey(() => ClassGroup)
    @Column
    classId: number;

    @BelongsTo(() => ClassGroup, 'classId')
    classGroup: ClassGroup;
}
