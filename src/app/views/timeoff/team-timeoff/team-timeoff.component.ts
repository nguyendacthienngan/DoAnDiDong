import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

import { TimeOffService } from '../../../shared/services/timeoff/timeoff.service'
import { TimeOff } from '../../../view-model/time-off.vm'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-team-timeoff',
  templateUrl: './team-timeoff.component.html',
  styleUrls: ['./team-timeoff.component.css']
})
export class TeamTimeoffComponent implements OnInit {

  datas:TimeOff[]=[];
  animal: string;
  name: string;
  constructor(
    private timeOffService : TimeOffService,
    public dialog : MatDialog
    ) { }

    
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.timeOffService.getTimeOffs().subscribe((res:any)=>{
      this.datas = res;
      console.log(res);
    })
  }

}
