import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, ForeignKey, DefaultScope, BelongsTo, DataType } from 'sequelize-typescript';
import Dashboard from './dashboard.model';
import CaseOption from './option.model';

@Table
export default class Util_Opt_Analysis extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    util_opt_analysis_id: number;

    @Column
    stakeholder_num: number;

    @Column
    short_amount: number;

    @Column
    long_amount: number;

    @Column(DataType.TEXT)
    short_explanation: string;

    @Column(DataType.TEXT)
    long_explanation: string;

    @Column
    short_pleasure: number;

    @Column
    long_pleasure: number;

    @ForeignKey(() => CaseOption)
    options_id: number;

    @ForeignKey(() => Dashboard)
    dashboard_id: number;

}