/// <reference types="node" />
import { Model } from 'sequelize-typescript';
import { Blob } from 'buffer';
import ClassGroup from '../classgroup.model';
import Dashboard from '../dashboard.model';
export default class Account extends Model {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    type: 'manager' | 'professor' | 'teaching_assistant' | 'student';
    get avatar(): Blob;
    createdAt: Date;
    updatedAt: Date;
    studentClassList: ClassGroup[];
    taClassList: ClassGroup[];
    instructorClassList: ClassGroup[];
    dashboards: Dashboard[];
    isAdmin(): boolean;
    isProfessor(): boolean;
    isStudent(): boolean;
    isTA(): boolean;
}
