import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  listFormations;
  listEtudiants;
  currentFormation={id:-1};

  constructor(private httpClient:HttpClient, public authService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/service-etudiant/formations")
      .subscribe(data=>{
        this.listFormations=data;
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(err);
      })
  }

  onGetEtudiants(f:any){
    this.currentFormation=f;
    this.httpClient.get("http://localhost:8080/service-etudiant/formations/"+f.id+"/etudiants")
      .subscribe(data=>{
        this.listEtudiants=data;
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(err);
      })
  };
  /*  ngOnInit(): void {
      this.httpClient.get("http://localhost:8080/service-etudiant/etudiants")
        .subscribe(data=>{
          this.etudiants._embedded.etudiants.push(data);
          this.mode=null;
        },err=>{
          console.log(err);
        })
    }*/

  onNewEtudiant(){
    this.router.navigateByUrl('/new-etudiant');
  }

}
