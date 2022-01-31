import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Account from './account.model';
import ClassGroup from '../classgroup.model';

@Table
export default class Student extends Model<Student> {
    @ForeignKey(() => Account)
    @Column
    studentId: number;

    @BelongsTo(() => Account, 'studentId')
    student: Account;

    @ForeignKey(() => ClassGroup)
    @Column
    classId: number;

    @BelongsTo(() => ClassGroup, 'classId')
    classGroup: ClassGroup;
}
