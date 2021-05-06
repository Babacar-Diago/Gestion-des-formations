import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from '../service/authentification.service';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'formations', component: TasksComponent},
  {path: 'etudiants', component: EtudiantsComponent},
  {path: 'new-formation', component: NewTaskComponent},
  {path: 'new-etudiant', component: NewEtudiantComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'listEtudiants', component: ListEtudiantComponent},
  {path: 'edit-formation/:id', component: EditFormationComponent},
  {path: 'edit-etudiant/:id', component: EditEtudiantComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    RegistrationComponent,
    NewTaskComponent,
    EtudiantsComponent,
    NewEtudiantComponent,
    ListEtudiantComponent,
    EditFormationComponent,
    EditEtudiantComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
