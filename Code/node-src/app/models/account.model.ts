import { Table, Column, Model, PrimaryKey, Scopes, DefaultScope, CreatedAt, UpdatedAt, DataType, Unique, AutoIncrement } from 'sequelize-typescript';
import { Blob } from 'buffer';

// DefaultScope does not include 'password'
@DefaultScope(() => ({
    attributes: ['id', 'username', 'email', 'first_name', 'last_name', 'type', 'avatar', 'createdAt', 'updatedAt'],
}))
@Scopes(() => ({
    withPassword: {},
}))
@Table
export default class Account extends Model<Account> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Unique
    @Column
    username: string;

    @Unique
    @Column
    email: string;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    password: string;

    @Column
    type: AccountType;

    @Column(DataType.BLOB('long'))
    avatar: Blob;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;

    isAdmin(): boolean {
        const accType = this.getDataValue('type');
        return accType === 'professor' || accType === 'manager';
    }
}
