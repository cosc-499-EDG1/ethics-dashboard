import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, ForeignKey, DefaultScope } from 'sequelize-typescript';
import Account from './account/account.model';

@DefaultScope(() => ({
    include: [
        {
            model: Account,
            through: { attributes: [] },
        },
    ],
}))
@Table
export default class Dashboard extends Model<Dashboard> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(() => Account)
    @Column
    owner: number;

    //TODO: Add each dashboard subtype here
}
