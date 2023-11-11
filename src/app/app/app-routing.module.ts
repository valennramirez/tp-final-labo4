import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/usuarios/login-form/login-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { VisualizarMiUsuarioComponent } from './components/usuarios/visualizar-mi-usuario/visualizar-mi-usuario.component';
import { VisualizarInfoPeliculaPageComponent } from './pages/visualizar-info-pelicula-page/visualizar-info-pelicula-page.component';
import { VisualizarInfoPeliculaComponent } from './components/peliculas/visualizar-info-pelicula/visualizar-info-pelicula.component';
import { PerfilUsuarioPageComponent } from './pages/perfil-usuario-page/perfil-usuario-page.component';
import { VisualizarResultadoBusquedaComponent } from './components/peliculas/visualizar-resultado-busqueda/visualizar-resultado-busqueda.component';

const routes: Routes = [
  {path: 'home', component:HomePagesComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'registrarse', component:RegisterPagesComponent},
  {path:'editar/:id', component:EditarPageComponent},
  {path:'pelicula/:id', component:VisualizarInfoPeliculaComponent},
  {path:'perfil/:id', component:VisualizarMiUsuarioComponent},
  {path:'busqueda', component:VisualizarResultadoBusquedaComponent}

  ,{path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



