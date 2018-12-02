import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASEURL} from '../../config/webservice';
import Imprimante from '../../Model/Imprimante';

@Injectable({
  providedIn: 'root'
})
export class OrdiserviceService {

  constructor(private http: HttpClient) {
  }

  create(ordinateur: any): Observable<Object> {
    return this.http.post(BASEURL + '/Materiaux', ordinateur);
  }

  getEquip(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(BASEURL + '/Materiaux');
  }

  getRouteur(): Observable<Routeur[]> {
    return this.http.get<Ordinateur[]>(BASEURL + '/Routeurs');
  }

  getImprimantes(): Observable<Imprimante[]> {
    return this.http.get<Ordinateur[]>(BASEURL + '/Imprimantes');

  }

  findById(id: number): Observable<Object> {
    return this.http.get(BASEURL + '/Materiaux/' + id);
  }

  updateEquip(routeur: any): Observable<Object> {
    return this.http.put(BASEURL + '/Materiaux/' + routeur.id, routeur);
  }

  removeEquip(id: number): Observable<Object> {
    return this.http.delete(BASEURL + '/Materiaux/' + id);
  }
}
