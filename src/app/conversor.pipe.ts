import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from './Models/alumnos_modelo';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): string {
    return args[0] ? value.nombre + " " + value.apellido : value.nombre;
  }
}
