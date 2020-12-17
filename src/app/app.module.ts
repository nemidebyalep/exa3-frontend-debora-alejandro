import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { RolService } from './services/rol.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'
import { AuthService } from './services/auth.service';
import { ListarproComponent } from './components/producto/listarpro/listarpro.component';
import { ProductoService } from './services/producto.service';
import { VentasComponent } from './components/ventas/ventas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetalleventaComponent } from './components/detalleventa/detalleventa.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ListarComponent,
    LoginComponent,
    ListarproComponent,
    VentasComponent,
    ClientesComponent,
    DetalleventaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RolService,AuthService,ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
