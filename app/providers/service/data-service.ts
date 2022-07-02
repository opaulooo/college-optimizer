import { Injectable } from '@angular/core';
import { IMateria } from 'src/app/shared/interfaces/materia';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResumo } from 'src/app/shared/interfaces/resumo';

const apiUrl = environment.api;


@Injectable()
export class DataService {



  constructor(private http: HttpClient) {
  }

  getMaterias(endpoint: String): Observable<Array<IMateria>> {
    return this.http.get<Array<IMateria>>(
      `${environment.api}/${endpoint}`
    );
  }

  postMateria(endpoint: String, materia: IMateria): Observable<IMateria> {
    return this.http.post<IMateria>(
      `${environment.api}/${endpoint}`, materia);
  }

  putMateria(endpoint: String, materia: IMateria): Observable<IMateria> {
    return this.http.put<IMateria>(
      `${environment.api}/${endpoint}`, materia);
  }



  getResumos(endpoint: String): Observable<Array<IResumo>> {
    return this.http.get<Array<IResumo>>(
      `${environment.api}/${endpoint}`
    );
  }

  postResumo(endpoint: String, resumo: IResumo): Observable<IResumo> {
    return this.http.post<IResumo>(
      `${environment.api}/${endpoint}`, resumo);
  }

  putResumo(endpoint: String, resumo: IResumo): Observable<IResumo> {
    return this.http.put<IResumo>(
      `${environment.api}/${endpoint}`, resumo);
  }


  delete(endpoint: String, id: number): Observable<unknown> {
    return this.http.delete(`${environment.api}/${endpoint}/${id}`);
  }

}
