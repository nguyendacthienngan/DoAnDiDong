import { Component } from '@angular/core';
import { AccountService } from '../../shared/services/account/account.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent { 
  // username: string;
  // password: string;
  // datas: any;
  // constructor(
  //   private accountService : AccountService,
  //   private router : Router
  // ) { }

  // ngOnInit(): void {
  //   this.accountService.login(this.username, this.password).subscribe((res:any)=>{
  //     this.datas = res;
  //     let canPath = '/home';
  //     this.router.navigateByUrl(canPath);
  //   })
  // }
  
}
