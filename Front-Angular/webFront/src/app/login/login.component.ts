import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  mode: number=0;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(dataForm: any){
    this.authService.login(dataForm)
      .subscribe(response => {
          let jwtToken;
          jwtToken = response.headers.get('Authorization');
          // @ts-ignore
          this.authService.saveToken(jwtToken);
          this.router.navigateByUrl('/etudiants');
        },
        error => {
          this.mode=1;
        });
  }

}
