import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, Unique, AutoIncrement, Scopes, DefaultScope, Length, BelongsToMany, ForeignKey, DataType, HasMany, HasOne } from 'sequelize-typescript';
import Care_Ethics_Options from './care_ethics_options.model';
import Dashboard from './dashboard.model';
import StakeholderVirtue from './stakeholdervirtues.model';

@Table
export default class Stakeholder extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    title: string;

    @Column(DataType.TEXT)
    description: string;

    @Column
    num: number;
    
    @HasOne(() => StakeholderVirtue)
    virtue: StakeholderVirtue;

    @Column
    virtue_value: number;

    @ForeignKey(() => Dashboard)
    dashboard_id: number;
}