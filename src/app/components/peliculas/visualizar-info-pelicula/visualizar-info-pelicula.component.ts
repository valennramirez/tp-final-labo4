import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/peliculas';
import { PeliculasService } from 'src/app/services/user/peliculas.service';

@Component({
  selector: 'app-visualizar-info-pelicula',
  templateUrl: './visualizar-info-pelicula.component.html',
  styleUrls: ['./visualizar-info-pelicula.component.css']
})
export class VisualizarInfoPeliculaComponent implements OnInit {

  constructor  (private peliculaService: PeliculasService){} 

  ngOnInit(): void {
    this.mostrarPeliculas();
  }

  listadoPeliculas: Peliculas[] | undefined= []; 

  async mostrarPeliculas()
  {
    this.listadoPeliculas= await this.peliculaService.getPeliculas(); 
  }

  buscarPelicula(titulo: string)
  {

  }

  obtenerMejoresPuntuados()
  {

  }
}
