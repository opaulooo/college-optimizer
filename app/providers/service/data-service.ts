import { Injectable } from '@angular/core';
import { IMateria } from 'src/app/shared/interfaces/materia';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseGet } from 'src/app/shared/interfaces/response-gets';

const apiUrl = environment.api;


@Injectable()
export class DataService {



  constructor(private http: HttpClient) {
  }

  getMateria(endpoint: String): Observable<Array<IMateria>> {
    return this.http.get<Array<IMateria>>(
      `${environment.api}/${endpoint}`
    );
  }

  postMateria(endpoint: String, materia: IMateria): Observable<IMateria> {
    console.log(endpoint, materia);
    return this.http.post<IMateria>(
      `${environment.api}/${endpoint}`, materia);
  }

  putMateria(endpoint: String, materia: IMateria): Observable<IMateria> {
    console.log(endpoint, materia);
    return this.http.put<IMateria>(
      `${environment.api}/${endpoint}`, materia);
  }



  delete(endpoint: String, id: number): Observable<unknown> {
    return this.http.delete(`${environment.api}/${endpoint}/${id}`);
  }

}
