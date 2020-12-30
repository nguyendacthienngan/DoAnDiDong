import { PhoneNumber } from './phone-number.vm'
import { Account } from './account.vm'
import { JobTitle } from './job-tittle.vm'
import { Team } from './team.vm'
import { SalaryCoefficient } from './salary-co.vm'

export class Employee{
    id:number;
    manager_id: number;
    first_name : string;
    last_name : string;
    national_id: string;
    employ_type: number;
    job_title_id: number;
    salary_coefficient_id: number;
    birth_date: Date;
    gender: number;
    marital_status: number;
    address: string;
    email: string;
    phone_contact: PhoneNumber;
    account: Account;
    job_title: JobTitle;
    salary_coefficient : SalaryCoefficient;
    involved_teams: Team[];
}