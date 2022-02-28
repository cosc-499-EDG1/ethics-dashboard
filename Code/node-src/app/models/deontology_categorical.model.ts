import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, ForeignKey, DefaultScope, BelongsTo, DataType } from 'sequelize-typescript';
import Dashboard from './dashboard.model';

@Table
export default class Deontology_Categorical extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    deontology_categorical_id: number;

    @Column
    motivations: number;

    @Column(DataType.TEXT)
    deontology_categorical_desc: string;

    @Column
    moral_law_1: string;
    
    @Column
    moral_law_2: string;

    @Column
    moral_law_3: string;

    @Column
    moral_law_4: string;

    @Column
    moral_law_5: string;

    @Column
    test: number;

    @ForeignKey(() => Dashboard)
    dashboard_id: number;
}