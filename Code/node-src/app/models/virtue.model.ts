import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, BelongsToMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import CaseOptionVirtue from './caseoptionvirtues.model';
import CaseOption from './option.model';
import Stakeholder from './stakeholder.model';
import StakeholderVirtue from './stakeholdervirtues.model';

@Table
export default class Virtue extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    mean: string;

    @Column
    excess: string;

    @Column
    deficiency: string;

    @BelongsToMany(() => CaseOption, () => CaseOptionVirtue)
    options?: CaseOption[];

    @BelongsToMany(() => Stakeholder, () => StakeholderVirtue)
    stakeholders?: Stakeholder[];

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}
