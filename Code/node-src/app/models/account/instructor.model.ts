import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Account from './account.model';
import ClassGroup from '../classgroup.model';

@Table
export default class Instructor extends Model<Instructor> {
    @ForeignKey(() => Account)
    @Column
    instructorId: number;

    @BelongsTo(() => Account, 'instructorId')
    instructor: Account;

    @ForeignKey(() => ClassGroup)
    @Column
    classId: number;

    @BelongsTo(() => ClassGroup, 'classId')
    classGroup: ClassGroup;
}
