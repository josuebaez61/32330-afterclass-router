import { Injectable } from '@angular/core';
import { Alumno } from '../Models/alumnos_modelo';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor() { }
  getEstudiantePorId(id: string | number) {
    return new Alumno(Number(id),'Pablo','kiu',true);
  }

}
