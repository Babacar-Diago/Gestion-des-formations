import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  users
  constructor(public authService:AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authService.getUsers()
      .subscribe(data =>{
        this.users=data;
      }, err=>{
        //this.authService.logout();
        //this.router.navigateByUrl("/login");
      })
  }

}
