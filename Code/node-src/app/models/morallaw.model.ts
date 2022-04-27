import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import CaseOption from './option.model';

@Table
export default class MoralLaw extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    uni: boolean;

    @Column
    uni_description: string;

    @Column
    consistency: boolean;
    
    @Column
    consistency_description: string;

    @ForeignKey(() => CaseOption)
    option_id: number;
}
