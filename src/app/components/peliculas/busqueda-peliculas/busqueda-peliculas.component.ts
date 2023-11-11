import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';

@Component({
  selector: 'app-busqueda-peliculas',
  templateUrl: './busqueda-peliculas.component.html',
  styleUrls: ['./busqueda-peliculas.component.css']
})
export class BusquedaPeliculasComponent implements OnInit {

  constructor(private peliculaService:PeliculasService,
              private formBuilder: FormBuilder) { }

  formulario!: FormGroup; 
  pelicula: undefined;
  
  listadoPeliculas: any; 
  listadoSeries: any; 

  ngOnInit(): void {
    this.initBusqueda(); 
  }

  initBusqueda()
  {
    this.formulario=this.formBuilder.group({
      titulo: ''
    })
  }

  async buscarPelicula()
  {
    this.listadoPeliculas = await this.peliculaService.getPelicula_PorPalabra(this.formulario.get('titulo')!.value); 
  }

  async buscarSerie()
  {

  }



}
