import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit{

  user! :User; 
  
    public formulario: FormGroup=this.formBuilder.group({
      gmail:['', (Validators.required, Validators.email)], 
      usuario:['', (Validators.required, Validators.minLength(5))], 
      nombre: ['', (Validators.required)], 
      apellido:['', (Validators.required)], 
      contraseña:['', (Validators.required, Validators.minLength(5))],
      id: [0, (Validators.required)], 
      cumpleaños: [new Date(), (Validators.required)], 
      genero:['', (Validators.required)]
    }); 
  

  constructor (private formBuilder: FormBuilder, 
               private UserService: UserService,
               private router:ActivatedRoute,
               private route: Router
              ) 
               {} 

  async ngOnInit(){
    await this.initEditar(); 
  }

  async initEditar(){
    this.router.params.subscribe((async param =>{
      
      const id=+param['id']; 

      this.user= await this.getUsuario(id); 

      this.formulario=this.formBuilder.group({
        gmail: [this.user.gmail],
        usuario:[this.user.usuario],
        nombre: [this.user.nombre],
        apellido:[this.user.apellido],
        contraseña:[this.user.contraseña],
        id:[this.user.id],
        cumpleaños: [this.user.cumpleaños],
        genero:[this.user.genero]
      })

    }))
  }

  async getUsuario(id: number)
  {
    const usuario: User= await this.UserService.getUsuario(id);
    return usuario; 
  }


  async editarUsuario(){
    if(this.formulario.invalid) 
      return; 

      this.user.apellido=this.formulario.get('apellido')!.value; 
      this.user.nombre=this.formulario.get("nombre")!.value; 
      this.user.usuario=this.formulario.get("usuario")!.value; 
      this.user.gmail=this.formulario.get("gmail")!.value; 
      this.user.contraseña=this.formulario.get("contraseña")!.value; 
      this.user.id=this.formulario.get("id")!.value; 
      this.user.cumpleaños=this.formulario.get("cumpleaños")!.value; 
      this.user.genero=this.formulario.get("genero")!.value; 
    

   await this.UserService.putUsuario(this.user);
   this.route.navigate(['home']); 
}

}
