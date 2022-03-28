import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany, ForeignKey, DataType, HasMany } from 'sequelize-typescript';
import Care_Ethics_Options from './care_ethics_options.model';
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

    @Column
    util_reason: string;

    @ForeignKey(() => Dashboard)
    dashboard_id: number;
    
    @HasMany(() => Care_Ethics_Options)
    care_ethics_options: Care_Ethics_Options[];
}