import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Candidate } from '../../../../view-model/candidate.vm'
import { CandidateService } from '../../../../shared/services/candidate/candidate.service'

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  private sub:any;
  private candidate : Candidate;
  private candidateID;
  constructor(private route: ActivatedRoute, 
    private candidateService : CandidateService) { }

  ngOnInit(): void {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.candidateID = params['id'];
     // Retrieve EmployeeDetails with Id route param
     this.candidateService.getCandidate(this.candidateID).subscribe((res:any)=>{
      this.candidate = res;
      console.log(this.candidate);
    })
  });

  }


}
