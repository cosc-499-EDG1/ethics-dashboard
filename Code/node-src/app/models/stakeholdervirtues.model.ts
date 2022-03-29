import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import CaseOption from './option.model';
import Stakeholder from './stakeholder.model';
import Virtue from './virtue.model';

@Table
export default class StakeholderVirtue extends Model {
    @ForeignKey(() => Stakeholder)
    @Column
    stakeholder_id: number;

    @BelongsTo(() => Stakeholder, 'stakeholder_id')
    stakeholder: Stakeholder;

    @ForeignKey(() => Virtue)
    @Column
    virtue_id: number;

    @BelongsTo(() => Virtue, 'virtue_id')
    virtue: Virtue;
}
