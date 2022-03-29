import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import CaseOption from './option.model';
import Virtue from './virtue.model';

@Table
export default class CaseOptionVirtue extends Model {
    @ForeignKey(() => CaseOption)
    @Column
    option_id: number;

    @BelongsTo(() => CaseOption, 'option_id')
    option: CaseOption;

    @ForeignKey(() => Virtue)
    @Column
    virtue_id: number;

    @BelongsTo(() => Virtue, 'virtue_id')
    virtue: Virtue;
}
