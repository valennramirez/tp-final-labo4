import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AutService } from 'src/app/services/user/aut.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private formBuilder: FormBuilder, 
    private autService: AutService, 
    private route: Router
   ) 
    {} 
  ngOnInit(): void {
    this.initLogin(); 
  }

  public usuarioDatos={
    usuario: '', 
    contraseña: ''
  }

  user: User | undefined; 
  formulario!: FormGroup; 
  listadoUsuarios: User[]| any=[]; 

  initLogin() {
    this.formulario= this.formBuilder.group({
      usuario:['', (Validators.required)], 
      contraseña:['', (Validators.required)]
    }); 
  }

  iniciarSesion ()
  {
    this.autService.verificarUsuarioContraseña(this.formulario.get('usuario')?.value, this.formulario.get('contraseña')?.value);
  }
}
