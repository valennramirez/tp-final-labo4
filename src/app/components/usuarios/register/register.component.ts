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
      genero:['', (Validators.required)]
    }); 
  }

  constructor (private formBuilder: FormBuilder, 
               private UserService: UserService
              ) 
               {} 

  listadoUsuarios: User[] | undefined = []; 
  user!:User; 

  async mostrarUsuarios()
  {
    this.listadoUsuarios= await this.UserService.getUsuarios(); 
  }

   guardarUsuario(){
    
    this.user.gmail=this.formulario.get('gmail')?.value; 
    this.user.apellido= this.formulario.get('apellido')?.value; 

        this.UserService.postUsuario(this.user); 
  
      console.log("Usuario creado con exito.");

    
  }

}
