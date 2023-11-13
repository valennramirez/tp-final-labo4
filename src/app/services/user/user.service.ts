import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:4500/usuarios"; 

  constructor(private router: Router,
              private http: HttpClient) {}; 


  getUsuariosHttp (): Observable<User[]>
  {
    return this.http.get<User[]>(this.url); 
  }

  getUsuarioHttp(id: number): Observable<User>
  {
    return this.http.get<User>(`${this.url}/${id}`); 
  }

  deleteUsuarioHttp(id: number): Observable<User>
  {
    return this.http.delete<User>(`${this.url}/${id}`); 
  }

  postUsuarioHttp(usuario: User): Observable<User>
  {
    return this.http.post<User>(
      this.url,
      usuario, 
      {headers: {'Content-type': 'application/json'}}
      ); 
  }

  putUsuarioHttp(usuario: User): Observable<User>
  {
    return this.http.post<User>(
      `${this.url}/${usuario.id}`,
      usuario, 
      {headers: {'Content-type': 'application/json'}}); 
  }

  /*
  async getUsuarios(): Promise <User[] | undefined>
  {

    try {
      const resultado = await fetch(this.url); 
      const listaUsuarios = await resultado.json();
      return listaUsuarios; 
    } catch (error) {
      alert('Error al levantar los usuarios')
    }

    return undefined; 
  }
  async getUsuario(id: number)
  {

    try {
      const resultado = await fetch(`${this.url}/${id}`); 
      const usuario = await resultado.json();
      return usuario; 
    } catch (error) {
      alert('Error al levantar el cliente')
    }

    return undefined; 
  }

   async postUsuario(usuario: User | undefined)
  {
    try{
      await fetch(this.url, 
        {method: 'POST',
        body: JSON.stringify(usuario),
        headers: {'Content-type': 'application/json'}
        })
      this.router.navigate(['home'])
    } catch (error)
    {
      alert('error al guardar usuario')
    }
  }

  async deleteUsuario (id: number)
  {
    try{
      await fetch(`${this.url}/${id}`, 
        {method: 'DELETE'})
      window.location.href="index.html"
    } catch(error)
    {
      alert ("El usuario no ha podido ser borrado "); 
    }
  }
  async putUsuario(usuario: User)
  {
    try{
      await fetch(`${this.url}/${usuario.id}`,
        {method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {'Content-type': 'application/json'}
        })
      this.router.navigate(['home'])
    } catch (error)
    {
      console.log(error)
    }
}*/
}
