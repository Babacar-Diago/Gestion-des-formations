import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentification.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  mode: number=2;
  private utilisateur: Object;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {}

  onSaveUser(utilisateur){
    this.authService.addUser(utilisateur)
      .subscribe(response =>{
        this.utilisateur=response;
        this.mode=1;
      }, err=>{
        this.mode=0;
        //console.log(err);
      })
  }

}
