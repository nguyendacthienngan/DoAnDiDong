import { JobTitle } from './job-tittle.vm'

export class Candidate{
    id:number;
    first_name : string;
    last_name : string;
    national_id: string;
    employ_type: number;
    position: JobTitle;
    candidate_state: number;
    birth_date: Date;
    gender: number;
    address: string;
    email: string;
    phone_contact: string;
}