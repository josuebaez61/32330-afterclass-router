import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { AlumnosListaComponent } from './Pages/alumnos-lista/alumnos-lista.component';
import { AnotherPage1Component } from './Pages/another-page1/another-page1.component';
import { AnotherPage2Component } from './Pages/another-page2/another-page2.component';
import { CleanLayoutComponent } from './Layouts/clean-layout/clean-layout.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { NotFoundComponent } from './Shared/Components/not-found/not-found.component';
import { EstudianteDetalleComponent } from './Pages/estudiante-detalle/estudiante-detalle.component';

const routes: Routes = [
  // DASHBAORD LAYOUT
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'estudiantes',
        component: AlumnosListaComponent,
      },
      {
        path: 'estudiantes/:id',
        component: EstudianteDetalleComponent,
      },
      {
        path: 'another-page-1',
        component: AnotherPage1Component,
      },
      {
        path: 'another-page-2',
        component: AnotherPage2Component,
      }
    ]
  },
  // CLEAN
  {
    path: 'auth',
    component: CleanLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: '**',
        component: NotFoundComponent
        // redirectTo: 'login'
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
