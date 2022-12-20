import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Alumno } from 'src/app/Models/alumnos_modelo';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-alumnos-dialog',
  templateUrl: './alumnos-dialog.component.html',
  styleUrls: ['./alumnos-dialog.component.scss']
})
export class AlumnosDialogComponent {
  nombre = new FormControl('')
  apellido = new FormControl('')

  alumnoForm = new FormGroup({
    nombre: this.nombre,
    apellido: this.apellido,
  })
constructor( private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Alumno | null,) {
  console.log(data)
  if (data) {
    this.alumnoForm.patchValue(data)
  }
}
  close() { 
   this.dialogRef.close()
}
}
