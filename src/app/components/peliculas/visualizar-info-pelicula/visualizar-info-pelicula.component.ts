import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peliculas } from 'src/app/interfaces/peliculas';
import { User } from 'src/app/interfaces/user';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-visualizar-info-pelicula',
  templateUrl: './visualizar-info-pelicula.component.html',
  styleUrls: ['./visualizar-info-pelicula.component.css']
})
export class VisualizarInfoPeliculaComponent implements OnInit {

  constructor  (private peliculaService: PeliculasService, 
                private router: ActivatedRoute,
                private userService: UserService){} 

  ngOnInit(): void {
    this.mostrarPelicula();
  }

  listadoPeliculas: any=[]; 
  pelicula:any; 

  user: User | any; 

  async mostrarPelicula()
  {
    this.setPelicula(); 
  }

  setPelicula()
  {
    this.router.params.subscribe((async param =>{
      const id=param['id']; 
      this.pelicula= await this.peliculaService.getPelicula_PorId(id); 

      console.log(this.pelicula);

      this.setDatosPelicula_DOM();
  }))
  }

  concatenarGenero(generos:[] ){
    let genre = "";
    generos.forEach((genero:any) => {
      genre += genero.name +", ";
    });

    genre=genre.substring(0, genre.length - 2);
    genre += ".";

    return genre;

  }

  setDatosPelicula_DOM(){
    const poster= document.querySelector('#poster'); 
      poster!.setAttribute('src', `${'https://image.tmdb.org/t/p/w500'}${this.pelicula.poster_path}`); 

      const titulo= document.querySelector('#titulo'); 
      titulo!.textContent=this.pelicula.title; 

      const sinopsis=document.querySelector('#sinopsis'); 
      sinopsis!.textContent=this.pelicula.overview;

      const genero= document.querySelector('#genero'); //hay mas de un genero, habria que hacer una funcion para unirlos
      genero!.textContent=this.concatenarGenero(this.pelicula.genres);


      const duracion= document.querySelector('#duracion');
      duracion!.textContent=`${this.pelicula.runtime} mins`; 

      const fechaLanzamiento= document.querySelector('#lanzamiento');
      fechaLanzamiento!.textContent=this.pelicula.release_date; 


      const idioma= document.querySelector('#idioma');
      idioma!.textContent=this.pelicula.spoken_languages[0].english_name; 
  
      const ratings=document.querySelector('#ratings'); 
      ratings!.textContent=this.pelicula.vote_average + ' / 10';
  }

  guardarEnLista(){
    this.user?.listaVer.push(this.pelicula.id);
    
    this.userService.putUsuario(this.user); 
  }
  
}
