import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/Models/alumnos_modelo';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): string {
    return args[0] ? value.nombre + " " + value.apellido : value.nombre;
  }
}
