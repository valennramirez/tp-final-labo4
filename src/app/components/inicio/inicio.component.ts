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
  listadoAventura:any=[];
  listadoCrimen:any=[];
  listadoDocumental:any=[];
  listadoAnimacion:any=[]; 
  listadoMejoresPuntuados:any=[]; 

  //agregar las listas de peliculas que devuelve cada get del service 
  setListados(){

    this.peliculaService.getPeliculas_GeneroHttp(28, 1).subscribe({
      next: (pe) => {
        this.listadoAccion= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(10749, 1).subscribe({
      next: (pe) => {
        this.listadoRomance= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(878, 1).subscribe({
      next: (pe) => {
        this.listadoCienciaFiccion= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(18, 1).subscribe({
      next: (pe) => {
        this.listadoDrama= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(9648, 1).subscribe({
      next: (pe) => {
        this.listadoMisterio= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(35, 1).subscribe({
      next: (pe) => {
        this.listadoComedia= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(14, 1).subscribe({
      next: (pe) => {
        this.listadoFantasia= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(27, 1).subscribe({
      next: (pe) => {
        this.listadoHorror= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(10751, 1).subscribe({
      next: (pe) => {
        this.listadoFamiliar= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(53, 1).subscribe({
      next: (pe) => {
        this.listadoThriller= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(12, 1).subscribe({
      next: (pe) => {
        this.listadoAventura= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(80, 1).subscribe({
      next: (pe) => {
        this.listadoCrimen= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(99, 1).subscribe({
      next: (pe) => {
        this.listadoDocumental= pe; 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(16, 1).subscribe({
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
