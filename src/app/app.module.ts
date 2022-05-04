import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { TurneroComponent } from './components/turnero/turnero.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { FarmaciasComponent } from './components/farmacias/farmacias.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig } from './components/carousel-config/carousel-config.component';
import { ProfesionalesService } from './components/profesionales/profesionales.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SesionComponent,
    TurneroComponent,
    AboutComponent,
    ServiciosComponent,
    ProfesionalesComponent,
    FarmaciasComponent,
    HeaderComponent,
    FooterComponent,
    NgbdCarouselConfig
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [NgbdCarouselConfig],
  providers: [ProfesionalesService],
  bootstrap: [AppComponent,
    NgbdCarouselConfig]
})
export class AppModule { }
