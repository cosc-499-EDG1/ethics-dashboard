import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany } from 'sequelize-typescript';
import Account from './account/account.model';
import TeachingAssistant from './account/teaching_assistant.model';
import Student from './account/student.model';
import Instructor from './account/instructor.model';

@DefaultScope(() => ({
    include: [
        {
            model: Account,
            as: 'students',
        },
        {
            model: Account,
            as: 'instructors',
        },
        {
            model: Account,
            as: 'teaching_assistants',
        },
    ],
}))
@Scopes(() => ({
    none: {},
    students: {
        include: [
            {
                model: Account,
                as: 'students',
            },
        ],
    },
    instructors: {
        include: [
            {
                model: Account,
                as: 'instructors',
            },
        ],
    },
    teaching_assistants: {
        include: [
            {
                model: Account,
                as: 'teaching_assistants',
            },
        ],
    },
}))
@Table
export default class ClassGroup extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Length({ min: 5, max: 5 })
    @Unique
    @Column
    code: string;

    @Length({ min: 3, max: 255 })
    @Column
    name: string;

    @BelongsToMany(() => Account, () => Instructor)
    instructors: Account[];

    @BelongsToMany(() => Account, () => TeachingAssistant)
    teaching_assistants: Account[];

    @BelongsToMany(() => Account, () => Student)
    students: Account[];

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}
