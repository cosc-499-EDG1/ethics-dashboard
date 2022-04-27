import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany, ForeignKey, DataType, HasMany } from 'sequelize-typescript';
import Care_Ethics_Options from './care_ethics_options.model';
import Dashboard from './dashboard.model';
import MoralLaw from './morallaw.model';


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
    
    @Column(DataType.TEXT)
    short_consequences: string;

    @Column(DataType.TEXT)
    long_consequences: string;

    @Column(DataType.TEXT)
    motivation: string;

    @Column(DataType.TEXT)
    moral_issues: string;

    @ForeignKey(() => Dashboard)
    @Column
    dashboard_id: number;

    @HasMany(() => MoralLaw)
    moral_laws: MoralLaw[];

    @HasMany(() => Care_Ethics_Options)
    care_ethics_options: Care_Ethics_Options[];
}