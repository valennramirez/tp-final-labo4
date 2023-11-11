import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //URL BASE

  urlBase: string ='https://api.themoviedb.org/3/'
  
  //API KEY 

  api_key: string= '?api_key=be83012a3b3f4f591240034020b0d76e&language=es-ES'; 

  //URL PARA LAS PELICULAS

  urlBasePelicula: string = "https://api.themoviedb.org/3/movie/";

  urlSearchPelicula: string="https://api.themoviedb.org/3/search/movie";

  constructor(private router: Router) {}; 

  async getPeliculas ()
  {
    try {
      const resultado= await fetch(this.urlBasePelicula); 
      const listaPeliculas = await resultado.json();
      return listaPeliculas 
    } catch (error) {
      alert('Error al levantar las peliculas')
    }
  }

  //GET DE PELICULAS POR --id, palabra, titulo, similitud

  async getPelicula_PorPalabra(ingreso: string)
  {
    try {
      const resultado= await fetch(`${this.urlSearchPelicula}${this.api_key}&query=${ingreso}`); 
      const listaPeliculas = await resultado.json();
      return listaPeliculas ;
    } catch (error) {
      alert('No se encontraron peliculas con las palabras ingresadas')
    }
  }

  async getPelicula_PorId (id:string){
    try{
      const resultado=await fetch (`${this.urlBasePelicula}${id}${this.api_key}`);
      const pelicula=await resultado.json(); 
      return pelicula; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPelicula_Similares (id:string){
    try{
      const resultado=await fetch (`${this.urlSearchPelicula}${id}/similar${this.api_key}`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroAccion()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=28`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroComedia()
  { 
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=16`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroRomance()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=10749`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroDrama()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=18`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroHorror()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=27`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroFantasia()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=14`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroCienciaFiccion()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=878`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }


  async getPeliculas_GeneroMisterio()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres= 9648`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroAdventura()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=12`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroCrimen()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=80`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroDocumental()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres= 99`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroFamiliar()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=10751`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroThriller()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=53`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_GeneroAnimacion()
  {
    try{
      const resultado=await fetch (`${this.urlBase}/discover/movie${this.api_key}&with_genres=16`);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }
  

  //GET DE PELICULAS Y SERIES TRENDING DEL DIA/SEMANA 
  async getPeliculas_SeriesTrendingWeek ()
  {
    try{
      const resultado=await fetch ("https://api.themoviedb.org/3/trending/all/week" + this.api_key);
      const listadoTrending=await resultado.json(); 
      return listadoTrending; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getPeliculas_SeriesTrendingDay ()
  {
    try{
      const resultado=await fetch ("https://api.themoviedb.org/3/trending/all/day" + this.api_key);
      const listadoTrending=await resultado.json(); 
      return listadoTrending; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

}
