import { Model } from 'sequelize-typescript';
export default class Dashboard extends Model {
    id: number;
    owner: number;
}
