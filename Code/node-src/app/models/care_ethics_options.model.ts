import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, ForeignKey, DefaultScope, BelongsTo, DataType } from 'sequelize-typescript';
import CaseOption from './option.model';
import Stakeholder from './stakeholder.model';

@Table
export default class Care_Ethics_Options extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    care_ethics_options_id: number;

    @Column
    stakeholder_attentiveness: number;

    @Column
    stakeholder_competence: number;

    @Column
    stakeholder_responsiveness: number;

    @ForeignKey(() => CaseOption)
    option_id: number;

    @ForeignKey(() => Stakeholder)
    stakeholder_id: number;

}