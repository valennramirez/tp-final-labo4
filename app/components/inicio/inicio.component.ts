import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private peliculaService: PeliculasService){}

  ngOnInit() {
    this.setListados(); 
  }

  basePoster: string='https://image.tmdb.org/t/p/w500'; 

  //trending
  listadoTrendingDay: any=[]; 
  listadoTrendingWeek: any=[]; 

  //generos
  listadoAccion: any=[]; 
  listadoRomance: any=[]; 
  listadoCienciaFiccion: any=[]; 
  listadoDrama: any=[]; 
  listadoMisterio: any=[]; 

  pelicula:any; 


  //agregar las listas de peliculas que devuelve cada get del service 
  async setListados(){

    this.listadoTrendingDay= await this.peliculaService.getPeliculas_SeriesTrendingDay(); 

    this.listadoTrendingWeek= await this.peliculaService.getPeliculas_SeriesTrendingWeek(); 

    this.listadoAccion= await this.peliculaService.getPeliculas_GeneroAccion(); 

    this.listadoRomance= await this.peliculaService.getPeliculas_GeneroRomance();

    this.listadoCienciaFiccion= await this.peliculaService.getPeliculas_GeneroCienciaFiccion();

    this.listadoDrama= await this.peliculaService.getPeliculas_GeneroDrama(); 

    this.listadoMisterio= await this.peliculaService.getPeliculas_GeneroMisterio(); 
    
    
    this.pelicula= await this.peliculaService.getPelicula_PorId('50319'); 
    
    console.log(this.pelicula); 
  }

  setListado_DOM()
  {

  }


}
