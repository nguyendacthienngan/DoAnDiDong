import { Component } from '@angular/core';
import { AccountService } from '../../shared/services/account/account.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent { 
  username: string;
  password: string;
  datas: any;
  // login_form: FormGroup;
  constructor(
    private accountService : AccountService,
    private router : Router,
    //private builder: FormBuilder,
  ) { }

  ngOnInit(): void {
  //   this.login_form = this.builder.group({
  //     username: new FormControl(null, []),
  //     password: new FormControl(null, []),
  // });

  //   // 
  }
  // login() {
  //   this.username = this.login_form.controls['username'].value;
  //   this.password = this.login_form.controls['password'].value;
  //   this.accountService.login(this.username, this.password).subscribe((res:any)=>{
  //       this.datas = res;
  //       let canPath = '/home';
  //       this.router.navigateByUrl(canPath);
  //     })
  // }

  login() {
    this.router.navigateByUrl('/home');
  }
}
