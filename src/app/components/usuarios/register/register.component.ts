import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  ngOnInit(): void {
    this.initRegister();
  }

  formulario!:FormGroup; 

  initRegister() {
    this.formulario=this.formBuilder.group({
      gmail:['', (Validators.required, Validators.email)], 
      usuario:['', (Validators.required, Validators.minLength(5))], 
      nombre: ['', (Validators.required)], 
      apellido:['', (Validators.required)], 
      contraseña:['', (Validators.required, Validators.minLength(5))],
      id: [0, (Validators.required)], 
      cumpleaños: [new Date(), (Validators.required)], 
      genero:['', (Validators.required)],
      listaVer: [], 
      listaVistos:[], 
      fotoPerfil: ''
    }); 
  }

  constructor (private formBuilder: FormBuilder, 
               private UserService: UserService
              ) 
               {} 

  
  user!:User; 

  guardarUsuario(){ 
    
    this.UserService.postUsuario(this.formulario.value); 
    
    console.log("Usuario creado con exito.");
  }

}
