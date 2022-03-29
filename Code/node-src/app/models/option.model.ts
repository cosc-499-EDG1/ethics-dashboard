import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany, ForeignKey, DataType, HasOne, HasMany } from 'sequelize-typescript';
import CaseOptionVirtue from './caseoptionvirtues.model';
import Dashboard from './dashboard.model';
import Virtue from './virtue.model';


@Table
export default class CaseOption extends Model {
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
    
    @Column
    short_consequences: string;

    @HasOne(() => CaseOptionVirtue)
    virtue: CaseOptionVirtue;

    @Column
    virtue_value: number;

    @Column
    long_consequences: string;

    @ForeignKey(() => Dashboard)
    @Column
    dashboard_id: number;
}