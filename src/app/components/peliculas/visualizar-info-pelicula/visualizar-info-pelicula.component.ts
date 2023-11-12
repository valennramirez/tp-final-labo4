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

  ngOnInit() {

    this.setPelicula(); 
 
  }

  pelicula:any=[]; 

  id:string=''; 

  user: User | any; 

  setPelicula(){
    this.router.params.subscribe(
      param => {
        const id =param['id']; 

        this.peliculaService.getPelicula_PorIdHttp(id).subscribe({
          next: (peli) => {
            this.pelicula= peli; 
            this.setDatosPelicula_DOM(); 
          }, 
          error: (err)=>{
            console.log(err); 
          }
        })
      }
    )
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

  concatenarIdiomas(idiomas:[] ){
    let idiomasA = "";
    idiomas.forEach((idiomas:any) => {
      idiomasA += idiomas.english_name +", ";
    });

    idiomasA=idiomasA.substring(0, idiomasA.length - 2);
    idiomasA += ".";

    return idiomasA; 
  }

  setDatosPelicula_DOM(){
    const poster= document.querySelector('#poster'); 
      poster!.setAttribute('src', `${'https://image.tmdb.org/t/p/w500'}${this.pelicula.poster_path}`); 

      const titulo= document.querySelector('#titulo'); 
      titulo!.textContent=this.pelicula.title; 

      const sinopsis=document.querySelector('#sinopsis'); 
      sinopsis!.textContent=this.pelicula.overview;

      const productora = document.querySelector('#productora'); 
      productora!.textContent=this.pelicula.production_companies[0].name; 

      const genero= document.querySelector('#genero'); //hay mas de un genero, habria que hacer una funcion para unirlos
      genero!.textContent=this.concatenarGenero(this.pelicula.genres);


      const duracion= document.querySelector('#duracion');
      duracion!.textContent=`${this.pelicula.runtime} minutos`; 

      const fechaLanzamiento= document.querySelector('#lanzamiento');
      fechaLanzamiento!.textContent=this.pelicula.release_date; 


      const idioma= document.querySelector('#idioma');
      idioma!.textContent= this.concatenarIdiomas(this.pelicula.spoken_languages);  
  
      const ratings=document.querySelector('#ratings'); 
      ratings!.textContent=this.pelicula.vote_average + ' / 10';
  }

  guardarEnLista(){
    this.user?.listaVer.push(this.pelicula.id);
    
    this.userService.putUsuarioHttp(this.user).subscribe({
      next: (pe) => {
        alert(pe + "guardada con exito");  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })
  }
  
}
