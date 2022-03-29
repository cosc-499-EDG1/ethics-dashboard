import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, ForeignKey, DefaultScope, BelongsTo, DataType } from 'sequelize-typescript';
import CaseOption from './option.model';
import Stakeholder from './stakeholder.model';

@Table
export default class Care_Ethics_Options extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    attentiveness: number;

    @Column
    competence: number;

    @Column
    responsiveness: number;

    @Column
    option_num: number;

    @BelongsTo(() => CaseOption)
    option: CaseOption;

    @ForeignKey(() => CaseOption)
    option_id: number;

    @ForeignKey(() => Stakeholder)
    stakeholder_id: number;
}