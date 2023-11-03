import { Component } from '@angular/core';
import { Peliculas } from '../../../interfaces/peliculas';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent {

  constructor  (private peliculaService: PeliculasService){} ///deberia ser del service de listas

  ngOnInit(): void {
    this.mostrarPeliculas();
  }

  listaPeliculas: Peliculas[] | undefined= []; 

  async mostrarPeliculas()
  {
    this.listaPeliculas= await this.peliculaService.getPeliculas(); 
  }

}
