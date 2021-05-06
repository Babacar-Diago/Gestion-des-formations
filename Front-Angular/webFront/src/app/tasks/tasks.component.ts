import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentification.service';
import {Formation} from '../model/formation.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  formations;

  constructor(public authService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getFormation()
      .subscribe(data =>{
        this.formations=data;
      }, err=>{
        //this.authService.logout();
        //this.router.navigateByUrl("/login");
      })
  }
  onNewFormation(){
    this.router.navigateByUrl('/new-formation');
  }

  onDeleteFormation(f: Formation) {
    let v = confirm("Voulez-vous supprimer la formation ?");
    if(v==true)
      this.authService.deleteformation(f)
        .subscribe(data => {
          this.ngOnInit();
        })
  }

  onEditFormation(f: Formation) {
    this.router.navigateByUrl("/edit-formation/"+f.id);
  }
}
