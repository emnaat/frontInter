import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BASEURL} from '../../config/webservice';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  constructor(private http: HttpClient) {
  }
  findAllUtilisateurs(): Observable<Object> {
    return this.http.get(BASEURL + '/utilisateurs');
  }
  findById(id: number): Observable<Object> {
    return this.http.get(BASEURL + '/utilisateurs/' + id);
  }
}
