import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentification.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  mode: number=2;
  private task: Object;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSaveFormation(formation){
    this.authService.saveFormation(formation)
      .subscribe(response =>{
        this.task=response;
        this.mode=1;
      }, err=>{
        this.mode=0;
        console.log(err);
      })
  }

}
