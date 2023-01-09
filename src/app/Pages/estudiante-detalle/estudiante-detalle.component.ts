import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';

@Component({
  selector: 'app-estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.scss']
})
export class EstudianteDetalleComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly estudiantesService: EstudiantesService
  ) {
    // this.route.params.subscribe(console.log)
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(this.estudiantesService.getEstudiantePorId(params['id']))
    });
  }
}
