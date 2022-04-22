import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, ForeignKey, DefaultScope, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import Account from './account/account.model';
import Deontology_Categorical from './deontology_categorical.model';
import CaseOption from './option.model';
import Stakeholder from './stakeholder.model';
import Utilitarianism from './utilitarianism.model';
import Util_Opt_Analysis from './util_opt_analysis.model';

@DefaultScope(() => ({
    include: [
        {
            model: Account,
            as: 'owner',
        },
    ],
}))
@Table
export default class Dashboard extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @ForeignKey(() => Account)
    @Column
    ownerId: number;

    @BelongsTo(() => Account)
    owner: Account;

    @Column
    deleted: boolean;

    @Column(DataType.TEXT)
    summary: string;

    @Column(DataType.TEXT)
    dilemmas: string;

    @Column(DataType.TEXT)
    role: string;
    
    @HasMany(() => CaseOption)
    options: CaseOption[];

    @HasMany(() => Stakeholder)
    stakeholders: Stakeholder[];

    @HasOne(() => Utilitarianism)
    utilitarianism: Utilitarianism;

    @HasOne(() => Util_Opt_Analysis)
    util_opt_analysis: Util_Opt_Analysis[];

    @HasOne(() => Deontology_Categorical)
    deontology_categorical: Deontology_Categorical;
}
