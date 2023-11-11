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

  slideConfig ={
    "slidesToShow": 6,
    "slidesToScroll": 6, 
    "autoplay": false, 
    "inifinite": true, 
    "responsive": [
      {"breakpoint": 992, 
      "settings": {
        "arrows": true, 
        "inifinite": true,
        "slidesToShow": 3, 
        "slidesToScroll": 3
      }
      },
      {
        "breakpoint": 768, 
        "settings": {
        "arrows": true, 
        "inifinite": true,
        "slidesToShow": 1, 
        "slidesToScroll": 1
      }}
    ] 
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
  listadoComedia: any=[]; 
  listadoFantasia:any=[];
  listadoHorror:any=[];
  listadoFamiliar:any=[];
  listadoThriller:any=[];
  listadoAdventura:any=[];
  listadoCrimen:any=[];
  listadoDocumental:any=[];
  listadoAnimacion:any=[]; 

  //agregar las listas de peliculas que devuelve cada get del service 
  async setListados(){

    this.listadoTrendingDay= await this.peliculaService.getPeliculas_SeriesTrendingDay(); 

    this.listadoTrendingWeek= await this.peliculaService.getPeliculas_SeriesTrendingWeek(); 

    this.listadoAccion= await this.peliculaService.getPeliculas_GeneroAccion(); 

    this.listadoRomance= await this.peliculaService.getPeliculas_GeneroRomance();

    this.listadoCienciaFiccion= await this.peliculaService.getPeliculas_GeneroCienciaFiccion();

    this.listadoDrama= await this.peliculaService.getPeliculas_GeneroDrama(); 

    this.listadoMisterio= await this.peliculaService.getPeliculas_GeneroMisterio(); 
    
    this.listadoAdventura= await this.peliculaService.getPeliculas_GeneroAdventura();

    this.listadoCrimen= await this.peliculaService.getPeliculas_GeneroCrimen(); 

    this.listadoDocumental= await this.peliculaService.getPeliculas_GeneroDocumental(); 

    this.listadoFamiliar= await this.peliculaService.getPeliculas_GeneroFamiliar(); 

    this.listadoThriller= await this.peliculaService.getPeliculas_GeneroThriller(); 

    this.listadoFantasia= await this.peliculaService.getPeliculas_GeneroFantasia();

    this.listadoAnimacion= await this.peliculaService.getPeliculas_GeneroAnimacion(); 

    this.listadoHorror= await this.peliculaService.getPeliculas_GeneroHorror();
  }

}
