import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AlumnosDialogComponent } from '../../Component/alumnos-dialog/alumnos-dialog.component';
import { Alumno } from 'src/app/Models/alumnos_modelo';
import { AlumnosListaComponent } from 'src/app/Page/alumnos-lista/alumnos-lista.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  constructor(private readonly dialogService: MatDialog) {}

  ngOnInit(): void {
  }

 // AlumnosToolbar = new AlumnosListaComponent

  agregaAlumno() {
  const dialog = this.dialogService.open(AlumnosDialogComponent)
  
  //Preguntar como hacer para poder realizar la accion desde aca

  dialog.afterClosed().subscribe((value) => {
    if (value) {
  //     const lastId = this.AlumnosToolbar.Alumnos[this.AlumnosToolbar.Alumnos.length - 1]?.id
       // Esto No! this.AlumnosToolbar.push(new Alumno(lastId + 1,value.nombre,value.apellido,value.fecha_nacimiento,true))
    //   this.AlumnosToolbar.Alumnos = [...this.AlumnosToolbar.Alumnos, new Alumno(lastId + 1,value.nombre,value.apellido,new Date('2022-04-26'),true)];   
    }
      })
  }
}