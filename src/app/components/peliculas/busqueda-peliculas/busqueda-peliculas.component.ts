import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculasService } from 'src/app/services/user/peliculas.service';

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

  ngOnInit(): void {
    this.initBusqueda(); 
  }

  initBusqueda()
  {
    this.formulario=this.formBuilder.group({
      titulo: ''
    })
  }

  buscarPorPalabra(palabra:string)
  {
    
  }

}
