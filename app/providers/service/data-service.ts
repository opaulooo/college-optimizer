import { Injectable } from '@angular/core';
import { IMateria } from 'src/app/shared/interfaces/materia';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseGet } from 'src/app/shared/interfaces/response-gets';
import { IResumo } from 'src/app/shared/interfaces/resumo';

const apiUrl = environment.api;


@Injectable()
export class DataService {



  constructor(private http: HttpClient) {
  }

  getMateria(endpoint: String): Observable<Array<IMateria>> {
    return this.http.get<Array<IMateria>>(
      `${environment.api}/materias`
    );
  }

  postMateria(materia: IMateria): Observable<IMateria> {
    return this.http.post<IMateria>(
      `${environment.api}/materias`, materia);
  }

  putMateria(materia: IMateria): Observable<IMateria> {
    return this.http.put<IMateria>(
      `${environment.api}/materias`, materia);
  }

  putFrequencia(frequencia: IMateria): Observable<IMateria> {
    return this.http.put<IMateria>(
      `${environment.api}/frequencias`, frequencia);
  }



  getResumos(): Observable<Array<IResumo>> {
    return this.http.get<Array<IResumo>>(
      `${environment.api}/resumos`
    );
  }

  postResumo(resumo: IResumo): Observable<IResumo> {
    return this.http.post<IResumo>(
      `${environment.api}/resumos`, resumo);
  }

  putResumo(resumo: IResumo): Observable<IResumo> {
    return this.http.put<IResumo>(
      `${environment.api}/resumos`, resumo);
  }



  delete(endpoint: String, id: number): Observable<unknown> {
    return this.http.delete(`${environment.api}/${endpoint}/${id}`);
  }

}
