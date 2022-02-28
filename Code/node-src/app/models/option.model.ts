import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany, ForeignKey, DataType } from 'sequelize-typescript';
import Dashboard from './dashboard.model';


@Table
export default class option extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    option_id: number;

    @Length({min: 3, max: 255})
    @Column
    option_title: string;

    @Column(DataType.TEXT)
    option_desc: string;

    @Column
    option_num: number;
    
    @ForeignKey(() => Dashboard)
    @Column
    dashboard_id: number;


}