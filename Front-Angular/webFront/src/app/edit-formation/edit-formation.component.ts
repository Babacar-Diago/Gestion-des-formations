import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {

  formationId: number;
  productFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              public authService:AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {

    this.formationId=activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.authService.getFormationForId(this.formationId)
      .subscribe(formation => {
        this.productFormGroup=this.fb.group({
          id:[formation.id, Validators.required],
          nom:[formation.nom, Validators.required],
          duree:[formation.duree, Validators.required]
        })
      });
  }

  redirectListFormation() {
    this.router.navigateByUrl("/formations");
  }

  onUpdateFormation() {
    this.authService.updateFormation(this.productFormGroup.value)
      .subscribe(data =>{
        alert("Success Product update");
        this.redirectListFormation();
      });
  }

}
