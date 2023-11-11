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

  async resultadoBusqueda(ingreso: string)
  {
    this.listadoBusqueda= await this.peliculaService.getPelicula_PorPalabra(ingreso); 
    console.log(this.listadoBusqueda); 
  }
 
}
