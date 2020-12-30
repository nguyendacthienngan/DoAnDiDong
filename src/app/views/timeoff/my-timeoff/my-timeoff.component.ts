import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

import { TimeOffService } from '../../../shared/services/timeoff/timeoff.service'
import { TimeOff } from '../../../view-model/time-off.vm'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CreateComponent } from './create/create.component'
@Component({
  selector: 'app-my-timeoff',
  templateUrl: './my-timeoff.component.html',
  styleUrls: ['./my-timeoff.component.css']
})
export class MyTimeoffComponent implements OnInit {

  datas:TimeOff[]=[];
  animal: string;
  name: string;
  constructor(
    private timeOffService : TimeOffService,
    public dialog : MatDialog
    ) { }

    openDialog() : void {
      const dialogRef = this.dialog.open(CreateComponent, {
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
  }

  getAll(){
    this.timeOffService.getTimeOffs().subscribe((res:any)=>{
      this.datas = res;
      console.log(res);
    })
  }


}
