import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { PeliculasService } from 'src/app/services/user/peliculas.service';
import { Peliculas } from '../../../interfaces/peliculas';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent {
  
  constructor  (private peliculaService: PeliculasService){} ///deberia ser del service de listas

  ngOnInit(): void {
    this.mostrarListaVistos();
  }

  listaPeliculas: Peliculas[] | undefined= []; 
  user: User | undefined; 

  setUser()
  {

  }

  mostrarListaVistos()
  {
    this.listaPeliculas = this.user?.listaVistos; 
  }

}
