import {
    Table,
    Column,
    Model,
    PrimaryKey,
    Scopes,
    DefaultScope,
    CreatedAt,
    UpdatedAt,
    DataType,
    Unique,
    AutoIncrement,
    Default,
    HasMany,
    Length,
    BelongsToMany,
    BelongsTo,
} from 'sequelize-typescript';
import { Blob } from 'buffer';
import ClassGroup from '../classgroup.model';
import Student from './student.model';
import Dashboard from '../dashboard.model';
import TeachingAssistant from './teaching_assistant.model';
import Instructor from './instructor.model';

// DefaultScope does not include 'password'
@DefaultScope(() => ({
    attributes: ['id', 'username', 'email', 'first_name', 'last_name', 'type', 'avatar', 'createdAt', 'updatedAt'],
}))
@Scopes(() => ({
    withPassword: {},
    withGroups: {
        include: [
            {
                model: ClassGroup,
                as: 'studentClassList',
            },
            {
                model: ClassGroup,
                as: 'taClassList',
            },
            {
                model: ClassGroup,
                as: 'instructorClassList',
            },
        ],
        attributes: ['id', 'username', 'email', 'first_name', 'last_name', 'type', 'avatar', 'studentClassList', 'taClassList', 'instructorClassList', 'createdAt', 'updatedAt'],
    },
    studentClasses: {
        include: [
            {
                model: ClassGroup,
                as: 'studentClassList',
            },
        ],
        attributes: ['id', 'username', 'email', 'first_name', 'last_name', 'type', 'avatar', 'studentClassList', 'createdAt', 'updatedAt'],
    },
    taClasses: {
        include: [
            {
                model: ClassGroup,
                as: 'taClassList',
            },
        ],
        attributes: ['id', 'username', 'email', 'first_name', 'last_name', 'type', 'avatar', 'taClassList', 'createdAt', 'updatedAt'],
    },
    instructorClasses: {
        include: [
            {
                model: ClassGroup,
                as: 'instructorClassList',
                through: { attributes: ['code', 'name'] },
            },
        ],
        attributes: ['id', 'username', 'email', 'first_name', 'last_name', 'type', 'avatar', 'instructorClassList', 'createdAt', 'updatedAt'],
    },
}))
@Table
export default class Account extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Length({ min: 3, max: 255 })
    @Unique
    @Column
    username: string;

    @Length({ min: 3, max: 255 })
    @Unique
    @Column
    email: string;

    @Length({ min: 1, max: 255 })
    @Column
    first_name: string;

    @Length({ min: 1, max: 255 })
    @Column
    last_name: string;

    @Column
    password: string;

    @Default('student')
    @Column
    type: 'manager' | 'professor' | 'teaching_assistant' | 'student';

    @Column(DataType.BLOB('long'))
    get avatar(): Blob {
        return this.getDataValue('avatar') ?? `https://ui-avatars.com/api/?name=${this.getDataValue('first_name')}+${this.getDataValue('last_name')}&background=random`;
    }

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;

    @BelongsToMany(() => ClassGroup, () => Student)
    studentClassList: ClassGroup[];

    @BelongsToMany(() => ClassGroup, () => TeachingAssistant)
    taClassList: ClassGroup[];

    @BelongsToMany(() => ClassGroup, () => Instructor)
    instructorClassList: ClassGroup[];

    @HasMany(() => Dashboard)
    dashboards: Dashboard[];

    isAdmin(): boolean {
        const accType = this.getDataValue('type');
        return accType === 'manager';
    }

    isProfessor(): boolean {
        const accType = this.getDataValue('type');
        return accType === 'professor';
    }

    isStudent(): boolean {
        const accType = this.getDataValue('type');
        return accType === 'student';
    }

    isTA(): boolean {
        const accType = this.getDataValue('type');
        return accType === 'teaching_assistant';
    }
}
