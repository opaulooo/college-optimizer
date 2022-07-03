import { Injectable } from '@angular/core';
import { IMateria } from 'src/app/shared/interfaces/materia';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResumo } from 'src/app/shared/interfaces/resumo';
import { ITarefa } from 'src/app/shared/interfaces/tarefa';

const apiUrl = environment.api;


@Injectable()
export class DataService {



  constructor(private http: HttpClient) {
  }

  get(endpoint: String): Observable<Array<any>> {
    return this.http.get<Array<any>>(
      `${environment.api}/${endpoint}`
    );
  }

  getMaterias(): Observable<Array<IMateria>> {
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



  getTarefas(): Observable<Array<ITarefa>> {
    return this.http.get<Array<ITarefa>>(
      `${environment.api}/tarefas`
    );
  }

  postTarefa(resumo: ITarefa): Observable<ITarefa> {
    return this.http.post<ITarefa>(
      `${environment.api}/tarefas`, resumo);
  }

  putTarefa(resumo: ITarefa): Observable<ITarefa> {
    return this.http.put<ITarefa>(
      `${environment.api}/tarefas`, resumo);
  }


  delete(endpoint: String, id: number): Observable<unknown> {
    return this.http.delete(`${environment.api}/${endpoint}/${id}`);
  }

}
