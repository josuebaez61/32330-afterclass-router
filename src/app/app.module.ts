import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/Layout/navbar/navbar.component';
import { ToolbarComponent } from './Shared/Layout/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagewapperComponent } from './Shared/Layout/pagewapper/pagewapper.component';
import { AlumnosListaComponent } from './Page/alumnos-lista/alumnos-lista.component';
import { MiMaterialModule } from './Shared/Module/mi-material.module';
import { AlumnosDialogComponent } from './Shared/Component/alumnos-dialog/alumnos-dialog.component';
import { ConversorPipe } from './conversor.pipe';
import { FontDirective } from './Shared/Directiva/font.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    PagewapperComponent,
    AlumnosListaComponent,
    AlumnosDialogComponent,
    ConversorPipe,
    FontDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MiMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
