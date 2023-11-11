import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


import { LoginFormComponent } from './components/usuarios/login-form/login-form.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios/listar-usuarios.component';
import { EditarClientesComponent } from './components/usuarios/editar-clientes/editar-clientes/editar-clientes.component';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { EditarListasComponent } from './components/listas/editar-listas/editar-listas.component';
import { PerfilUsuarioPageComponent } from './pages/perfil-usuario-page/perfil-usuario-page.component';
import { ListasPageComponent } from './pages/listas-page/listas-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VisualizarInfoPeliculaComponent } from './components/peliculas/visualizar-info-pelicula/visualizar-info-pelicula.component';
import { VisualizarMiUsuarioComponent } from './components/usuarios/visualizar-mi-usuario/visualizar-mi-usuario.component';
import { BusquedaPeliculasComponent } from './components/peliculas/busqueda-peliculas/busqueda-peliculas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VisualizarResultadoBusquedaComponent } from './components/peliculas/visualizar-resultado-busqueda/visualizar-resultado-busqueda.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    NavbarComponent,
    HomePagesComponent,
    LoginPageComponent,
    RegisterPagesComponent,
    ListarUsuariosComponent,
    EditarClientesComponent,
    EditarPageComponent,
    EditarListasComponent,
    PerfilUsuarioPageComponent,
    ListasPageComponent,
    SidebarComponent,
    VisualizarInfoPeliculaComponent,
    VisualizarMiUsuarioComponent,
    BusquedaPeliculasComponent,
    InicioComponent,
    VisualizarResultadoBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
