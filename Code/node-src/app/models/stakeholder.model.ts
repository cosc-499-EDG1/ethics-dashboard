import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany, ForeignKey, DataType } from 'sequelize-typescript';
import Dashboard from './dashboard.model';

@Table
export default class Stakeholder extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    stakeholder_id: number;

    @Column
    stakeholder_title: string;

    @Column
    stakeholder_desc: string;

    @Column
    stakeholder_num: number;

    @ForeignKey(() => Dashboard)
    dashboard_id: number;
    
}