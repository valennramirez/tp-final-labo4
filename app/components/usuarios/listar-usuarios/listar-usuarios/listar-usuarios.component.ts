import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{

  constructor(private userService:UserService) {}
  
  ngOnInit(): void {
    this.mostrarUsuarios(); 
  }
;

  listaUsuarios: User[] | undefined=[]; 


  async mostrarUsuarios()
  {
    this.listaUsuarios= await this.userService.getUsuarios(); 
  }

  async eliminarUsuario(id : number){
    await this.userService.deleteUsuario(id); 
  }
  

}
