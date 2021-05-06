import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentification.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {

  etudiantId: number;
  productFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              public authService:AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {

    this.etudiantId=activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.authService.getEtudiantForId(this.etudiantId)
      .subscribe(etudiant => {
        this.productFormGroup=this.fb.group({
          id:[etudiant.id, Validators.required],
          nom:[etudiant.nom, Validators.required],
          prenom:[etudiant.prenom, Validators.required],
          dateNaissance:[etudiant.dateNaissance, Validators.required]
        })
      });
  }

  redirectListEtudiants() {
    this.router.navigateByUrl("/listEtudiants");
  }

  onUpdateEtudiant() {
    this.authService.updateEtudiant(this.productFormGroup.value)
      .subscribe(data =>{
        alert("Success Product update");
        this.redirectListEtudiants();
      });
  }
}
