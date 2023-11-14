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
  listadoMejoresPuntuados:any=[]; 

  //agregar las listas de peliculas que devuelve cada get del service 
  setListados(){

    this.peliculaService.getPeliculas_GeneroAccionHttp().subscribe({
      next: (pe) => {
        this.listadoAccion= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroRomanceHttp().subscribe({
      next: (pe) => {
        this.listadoRomance= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroCienciaFiccionHttp().subscribe({
      next: (pe) => {
        this.listadoCienciaFiccion= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroDramaHttp().subscribe({
      next: (pe) => {
        this.listadoDrama= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroMisterioHttp().subscribe({
      next: (pe) => {
        this.listadoMisterio= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroComediaHttp().subscribe({
      next: (pe) => {
        this.listadoComedia= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroFantasiaHttp().subscribe({
      next: (pe) => {
        this.listadoFantasia= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHorrorHttp().subscribe({
      next: (pe) => {
        this.listadoHorror= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroFamiliarHttp().subscribe({
      next: (pe) => {
        this.listadoFamiliar= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroThrillerHttp().subscribe({
      next: (pe) => {
        this.listadoThriller= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroAdventuraHttp().subscribe({
      next: (pe) => {
        this.listadoAdventura= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroCrimenHttp().subscribe({
      next: (pe) => {
        this.listadoCrimen= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroDocumentalHttp().subscribe({
      next: (pe) => {
        this.listadoDocumental= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroAnimacionHttp().subscribe({
      next: (pe) => {
        this.listadoAnimacion= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_TrendingDayHttp().subscribe({
      next: (pe) => {
        this.listadoTrendingDay= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_TrendingWeekHttp().subscribe({
      next: (pe) => {
        this.listadoTrendingWeek= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_MejorPuntuacion().subscribe({
      next: (pe) => {
        this.listadoMejoresPuntuados= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })
  }

}
