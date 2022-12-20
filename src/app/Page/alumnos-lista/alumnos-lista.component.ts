import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/Models/alumnos_modelo';
import { AlumnosDialogComponent } from 'src/app/Shared/Component/alumnos-dialog/alumnos-dialog.component';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss']
})
export class AlumnosListaComponent {

Alumnos: Alumno [] = [
    new Alumno(1,'Franco','Perez',true),
    new Alumno(2,'Pablo','kiu',true),
    new Alumno(3,'Walter','Goku',false),
    new Alumno(4,'Belen','Picachu',true),
    new Alumno(5,'Graciela','Paez',false),
    new Alumno(6,'Patricia','Pipe',true),
]

displayedColumns = ['id','nombre','apellido','aprobado','editar','borrar']

constructor(private readonly dialogService: MatDialog) {}

agregaAlumno() {
  const dialog = this.dialogService.open(AlumnosDialogComponent)

  dialog.afterClosed().subscribe((value) => {
    if (value) {
       const lastId = this.Alumnos[this.Alumnos.length - 1]?.id
       // Esto No! this.AlumnosToolbar.push(new Alumno(lastId + 1,value.nombre,value.apellido,value.fecha_nacimiento,true))
       this.Alumnos = [...this.Alumnos, new Alumno(lastId + 1,value.nombre,value.apellido,true)];   
    }
      })
  }

  eliminaAlumno(alumno: Alumno) {
    this.Alumnos = this.Alumnos.filter((alu) => alu.id !== alumno.id);
  }

  editarAlumno(estudiante : Alumno) {
    const dialog = this.dialogService.open(AlumnosDialogComponent, {
      data: estudiante,
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log(data)
        this.Alumnos = this.Alumnos.map((est) => est.id === estudiante.id ? {...est, ...data} : est)
        console.log(this.Alumnos);
      }
    })
  }
}

