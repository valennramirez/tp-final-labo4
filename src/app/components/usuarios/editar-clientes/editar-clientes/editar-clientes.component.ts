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
               private userService: UserService,
               private router:ActivatedRoute, 
               private route: Router
              ) 
               {} 

  ngOnInit(){
     this.initEditar(); 
  }

  initEditar(){
    this.router.params.subscribe((async param =>{
      
      const id=+param['id']; 

      this.getUsuario(id); 

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
    this.userService.getUsuarioHttp(id).subscribe({
      next: (us) =>{
        this.user = us; 
      },
      error: (err) =>{
        console.log(err); 
      }
    })
  }


  async editarUsuario(){
    if(this.formulario.invalid) 
      return; 

      this.user=this.formulario.value; 
    

   this.userService.putUsuarioHttp(this.user).subscribe({
    next: (us) =>{
      alert("Usuario editado con exito"); 
      this.route.navigate(['home']); 
    }, 
    error: (err)=>{
      console.log(err); 
    }
   })
}

}
