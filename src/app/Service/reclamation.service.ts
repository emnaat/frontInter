import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }

  listerRec(){
    return this.http.get('http://localhost:8082/rec/reclamations');
  }
  post(body) {
    return this.http.post('http://localhost:8082/rec/reclamation', body);
  }

}
