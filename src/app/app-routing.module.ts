import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { ListarproComponent } from './components/producto/listarpro/listarpro.component';
import { AuthrutasGuard } from './services/guards/authrutas.guard';
import { RoleGuard } from './services/guards/role.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'roles', component: ListarComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'SUBGERENTE'}},
  {path: 'productos', component: ListarproComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'SUBGERENTE'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
