import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';

@Component({
  selector: 'app-visualizar-resultado-busqueda',
  templateUrl: './visualizar-resultado-busqueda.component.html',
  styleUrls: ['./visualizar-resultado-busqueda.component.css']
})
export class VisualizarResultadoBusquedaComponent implements OnInit{
  constructor(private peliculaService: PeliculasService){}

  ngOnInit(){
    this.resultadoBusqueda('donnie'); 
  }

  listadoBusqueda: any=[]; 

  resultadoBusqueda(ingreso: string)
  {
    this.peliculaService.getPeliculas_PorPalabraHttp(ingreso).subscribe({
      next: (pe) => {
        this.listadoBusqueda= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })
    
    console.log(this.listadoBusqueda); 
  }
 
}
