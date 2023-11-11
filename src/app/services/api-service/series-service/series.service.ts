import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  //API KEY 

  api_key: string= '?api_key=7ec8f00c2662c941b18def9c5d6600cc'; 

   //URL PARA LAS SERIES

   urlBaseSerie: string = "https://api.themoviedb.org/3/tv/";

   urlSearchSerie: string="https://api.themoviedb.org/3/search/tv?query=";

   //GET DE SERIES POR --id, palabra, titulo, similitud

   async getSerie_PorPalabra(ingreso: string[])
  {
    let busqueda= ingreso.filter((e) => {return e + '%20'});

    try {
      const resultado= await fetch(`${this.urlSearchSerie}/${busqueda}${this.api_key}`); 
      const listadoSerie = await resultado.json();
      return listadoSerie;
    } catch (error) {
      alert('No se encontraron peliculas con las palabras ingresadas')
    }
  }

  async getSerie_PorId (id:string){
    try{
      const resultado=await fetch (this.urlBaseSerie + id + this.api_key);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

  async getSerie_Similares (id:string){
    try{
      const resultado=await fetch (this.urlBaseSerie + id + '/similar' + this.api_key);
      const listadoSerie=await resultado.json(); 
      return listadoSerie; 
    } catch (error){
      alert('No se pudo encontrar peliculas trending');
    }
  }

 
}
