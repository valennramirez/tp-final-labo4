import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url = "https://imdb-api.com/en/API/Movies"; 

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

}
