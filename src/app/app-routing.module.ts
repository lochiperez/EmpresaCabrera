import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FarmaciasComponent } from './components/farmacias/farmacias.component';
import { HomeComponent } from './components/home/home.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { TurneroComponent } from './components/turnero/turnero.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'farmacias', component: FarmaciasComponent },
  { path: 'iniciar-sesion', component: SesionComponent },
  { path: 'turnero-web', component: TurneroComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
