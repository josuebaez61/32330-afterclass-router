import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/Layout/navbar/navbar.component';
import { ToolbarComponent } from './Shared/Layout/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagewapperComponent } from './Shared/Layout/pagewapper/pagewapper.component';
import { AlumnosListaComponent } from './Pages/alumnos-lista/alumnos-lista.component';
import { MiMaterialModule } from './Shared/Module/mi-material.module';
import { AlumnosDialogComponent } from './Shared/Component/alumnos-dialog/alumnos-dialog.component';
import { FontDirective } from './Shared/Directiva/font.directive';
import { LayoutsModule } from './Layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './Shared/shared.module';
import { PagesModule } from './Pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutsModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
