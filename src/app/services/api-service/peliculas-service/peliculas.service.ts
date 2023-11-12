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

  constructor(private http: HttpClient) {}; 


  //GET DE PELICULAS POR --id, palabra, titulo, similitud

  getPeliculas_PorPalabraHttp (ingreso:string): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlSearchPelicula}${this.api_key}&query=${ingreso}`); 
  }

  getPelicula_PorIdHttp (id:string) : Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBasePelicula}${id}${this.api_key}`);
  }

  getPeliculas_SimilaresHttp (id:string): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlSearchPelicula}${id}/similar${this.api_key}`); 
  }
  
  getPeliculas_GeneroAccionHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=28`); 
  }

  getPeliculas_GeneroComediaHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=16`); 
  }

  getPeliculas_GeneroRomanceHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=10749`); 
  }

  getPeliculas_GeneroDramaHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=18`); 
  }

  getPeliculas_GeneroHorrorHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=27`); 
  }

  getPeliculas_GeneroFantasiaHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=14`); 
  }

  getPeliculas_GeneroCienciaFiccionHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=878`); 
  }

  getPeliculas_GeneroMisterioHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=9648`); 
  }

  getPeliculas_GeneroAdventuraHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=12`); 
  }

  getPeliculas_GeneroCrimenHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=80`); 
  }

  getPeliculas_GeneroDocumentalHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=99`); 
  }

  getPeliculas_GeneroFamiliarHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=10751`); 
  }

  getPeliculas_GeneroThrillerHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=53`); 
  }

  getPeliculas_GeneroAnimacionHttp(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=16`); 
  }

  //GET DE PELICULAS Y SERIES TRENDING DEL DIA/SEMANA 

  getPeliculas_TrendingWeekHttp(): Observable<any[]>
  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/trending/movie/week" + this.api_key); 
  }

  getPeliculas_TrendingDayHttp(): Observable<any[]>
  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/trending/movie/day" + this.api_key); 
  }

}
