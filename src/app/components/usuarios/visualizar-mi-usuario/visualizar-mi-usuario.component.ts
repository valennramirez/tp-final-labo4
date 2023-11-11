import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-visualizar-mi-usuario',
  templateUrl: './visualizar-mi-usuario.component.html',
  styleUrls: ['./visualizar-mi-usuario.component.css']
})
export class VisualizarMiUsuarioComponent implements OnInit {

  user:User | any; 

  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.visualizarUsuario(); 
  }

  visualizarUsuario()
  {
    this.router.params.subscribe((async param =>{
      const id=+param['id']; 
      this.user= await this.userService.getUsuario(id); }))
  }

}
