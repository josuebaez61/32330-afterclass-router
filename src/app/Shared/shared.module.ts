import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosDialogComponent } from './Component/alumnos-dialog/alumnos-dialog.component';
import { FontDirective } from './Directiva/font.directive';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { PagewapperComponent } from './Layout/pagewapper/pagewapper.component';
import { ToolbarComponent } from './Layout/toolbar/toolbar.component';
import { MiMaterialModule } from './Module/mi-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ConversorPipe } from './Pipes/conversor.pipe';



@NgModule({
  declarations: [
    AlumnosDialogComponent,
    FontDirective,
    NavbarComponent,
    PagewapperComponent,
    ToolbarComponent,
    NotFoundComponent,
    ConversorPipe,
  ],
  imports: [
    CommonModule,
    MiMaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    AlumnosDialogComponent,
    FontDirective,
    NavbarComponent,
    PagewapperComponent,
    ToolbarComponent,
    MiMaterialModule,
    ConversorPipe,
  ]
})
export class SharedModule { }
