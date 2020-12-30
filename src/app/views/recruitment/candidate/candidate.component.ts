import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { CandidateService } from '../../../shared/services/candidate/candidate.service'
import { Candidate } from '../../../view-model/candidate.vm'

import { JobTitleService } from '../../../shared/services/job-title/job-title.service'
import { JobTitle } from '../../../view-model/job-tittle.vm'

import { CreateCandidateComponent } from './create-candidate/create-candidate.component'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateComponent implements OnInit {

  datas:Candidate[]=[];
  jobTitles: JobTitle[] = [];
  data: {};
  animal: string;
  name: string;
  constructor(
    private candidateService : CandidateService,
    private jobTitleService : JobTitleService,
    public dialog : MatDialog,
    ) { }

    openDialog() : void {
      const dialogRef = this.dialog.open(CreateCandidateComponent, {
        width: '30%',
        data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    };

  ngOnInit(): void {
    this.getAll();
    this.getJobTitles();
  }

  getAll(){
    this.candidateService.getCandidates().subscribe((res:any)=>{
      this.datas = res;
    })
  }

  getJobTitles() {
    this.jobTitleService.getJobTitles().subscribe((res:any)=>{
      this.jobTitles = res;
    })
  }

  
}
