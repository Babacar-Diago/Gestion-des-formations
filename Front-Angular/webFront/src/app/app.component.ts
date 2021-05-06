import { Component } from '@angular/core';
import {AuthenticationService} from '../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //private btnLogin : string ='Login';

  constructor(private authService: AuthenticationService, private router: Router){}

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

  onNewTask(){
    this.router.navigateByUrl('/new-task');
  }

}
