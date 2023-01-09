import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { SharedModule } from '../Shared/shared.module';
import { AnotherPage1Component } from './another-page1/another-page1.component';
import { AnotherPage2Component } from './another-page2/another-page2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { MiMaterialModule } from '../Shared/Module/mi-material.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AlumnosListaComponent,
    AnotherPage1Component,
    AnotherPage2Component,
    LoginPageComponent,
    EstudianteDetalleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MiMaterialModule,
    // MatIconModule,
    // MatTableModule
  ]
})
export class PagesModule { }
