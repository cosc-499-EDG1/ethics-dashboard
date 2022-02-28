import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany, ForeignKey, DataType } from 'sequelize-typescript';
import Dashboard from './dashboard.model';

@Table
export default class Utilitarianism extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    utilitarianism_id: number;

    @Column(DataType.TEXT)
    stakeholder_1_reason: string;

    @Column(DataType.TEXT)
    stakeholder_2_reason: string;
    
    @Column(DataType.TEXT)
    stakeholder_3_reason: string;

    @ForeignKey(() => Dashboard)
    dashboardid: number;
}