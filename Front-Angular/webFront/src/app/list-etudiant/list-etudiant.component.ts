import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentification.service';
import {Router} from '@angular/router';
import {Formation} from '../model/formation.model';
import {Etudiant} from '../model/etudiant.model';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  etudiants;

  constructor(public authService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getEtudiants()
      .subscribe(data =>{
        this.etudiants=data;
      }, err=>{
        //this.authService.logout();
        //this.router.navigateByUrl("/login");
      })
  }

  onNewEtudiant() {
      this.router.navigateByUrl('/new-etudiant');
  }

  onEditEtudiant(e: Etudiant) {
    this.router.navigateByUrl("/edit-etudiant/"+e.id);
  }

  onDeleteEtudiant(e: Etudiant) {
    let v = confirm("Voulez-vous supprimer l'étudiant ?");
    if(v==true)
      this.authService.deleteEtudiant(e)
        .subscribe(data => {
          this.ngOnInit();
        })
  }
}
