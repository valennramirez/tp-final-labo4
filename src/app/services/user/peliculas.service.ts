import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url: string = "https://imdb-api.com/en/API/Movies"; 
  urlSearch: string="https://api.themoviedb.org/3/search/movie?query";

  constructor(private router: Router) {}; 

  async getPeliculas ()
  {
    try {
      const resultado= await fetch(this.url); 
      const listaPeliculas = await resultado.json();
      return listaPeliculas 
    } catch (error) {
      alert('Error...')
    }
  }

  async getPelicula(ingreso: string)
  {
    let arrIn: string[]=ingreso.split(''); 

    try {
      const resultado= await fetch(`${this.urlSearch}/${ingreso}`); 
      const listaPeliculas = await resultado.json();
      return listaPeliculas 
    } catch (error) {
      alert('Error...')
    }
  }

}
