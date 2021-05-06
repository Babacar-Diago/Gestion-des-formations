import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentification.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {

  mode: number=2;
  private etudiant: any;
  listFormations:any;

  constructor(private authService: AuthenticationService,private httpClient:HttpClient, public fb: FormBuilder) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/service-etudiant/formations")
      .subscribe(data=>{
        this.listFormations=data;
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(err);
      })
  }

  onSaveEtudiant(etudiant){
    this.authService.saveEtudiant(etudiant)
      .subscribe(response =>{
        this.etudiant=response;
        this.mode=1;
      }, err=>{
        this.mode=0;
        console.log(err);
      })
  }

}
