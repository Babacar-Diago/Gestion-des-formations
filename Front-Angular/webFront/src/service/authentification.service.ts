import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Formation} from '../app/model/formation.model';
import {FormBuilder} from '@angular/forms';
import {Etudiant} from '../app/model/etudiant.model';

@Injectable()
export class AuthenticationService{
  private host = 'http://localhost:8088';
  private host2 = 'http://localhost:8080';
  private jwtToken=null;
  private roles: any[]=[];
  //
  constructor(private httpClient: HttpClient, private router: Router){}

  login(user: any){
    return this.httpClient.post(this.host + '/login', user, {observe: 'response'});
  }

  saveToken(jwt: any){
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  public estConnecte(){
    return localStorage.getItem('token') !== null;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  // Methode qui permet de récupérer la list des tasks
  getTasks() {
    if(this.jwtToken==null) this.loadToken();
    return this.httpClient.get(this.host+"/tasks", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  // Methode qui permet de récupérer la list des formations
  getFormation() {
    return this.httpClient.get(this.host2+"/service-etudiant/formations");
  }
  // Methode qui permet de récupérer une formations par son id
  getFormationForId(id: number): Observable<Formation>{
    return this.httpClient.get<Formation>(this.host2+"/service-etudiant/formations/"+id);
  }
  // Methode qui permet de récupérer un etudiant par son id
  getEtudiantForId(id: number): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(this.host2+"/service-etudiant/etudiants/"+id);
  }

  // Methode qui permet de récupérer la list des Etudiant
  getEtudiants() {
    return this.httpClient.get(this.host2+"/service-etudiant/etudiants");
  }
  // Methode qui permet de récupérer la list des utilisateurs
  getUsers() {
    return this.httpClient.get(this.host+"/appUsers", {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  // Deconnexion en supprimant le token
  logout() {
    this.jwtToken=null;
    localStorage.removeItem('token');
  }
  isAdmin(){
     for (let r of this.roles) {
       if(r.authority=='ADMIN') return true;
     }
     return false;
  }

  saveFormation(formation){
    return this.httpClient.post(this.host2+"/service-etudiant/formations", formation);
  }

  saveEtudiant(etudiant){
    return this.httpClient.post(this.host2+"/service-etudiant/etudiants", etudiant, {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  addUser(utilisateur) {
    return this.httpClient.post(this.host+"/register", utilisateur);
  }

  deleteformation(f: Formation) {
    return this.httpClient.delete<void>(this.host2+"/service-etudiant/formations/"+f.id);
  }

  updateFormation(formation: Formation) {
    return this.httpClient.put(this.host2+"/service-etudiant/formations/"+formation.id, formation);
  }

  updateEtudiant(etudiant: Etudiant) {
    return this.httpClient.put(this.host2+"/service-etudiant/etudiants/"+etudiant.id, etudiant);
  }

  deleteEtudiant(e: Etudiant) {
    return this.httpClient.delete<void>(this.host2+"/service-etudiant/etudiants/"+e.id);
  }
}
