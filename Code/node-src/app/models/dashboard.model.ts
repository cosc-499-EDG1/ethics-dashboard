import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, ForeignKey, DefaultScope, BelongsTo } from 'sequelize-typescript';
import Account from './account/account.model';

@DefaultScope(() => ({
    include: [
        {
            model: Account,
            as: 'owner',
        },
    ],
}))
@Table
export default class Dashboard extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @ForeignKey(() => Account)
    @Column
    ownerId: number;

    @BelongsTo(() => Account)
    owner: Account;

    //TODO: Add each dashboard subtype here
    @Column
    type: string; //temporary
}
