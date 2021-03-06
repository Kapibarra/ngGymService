import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { AttendaceComponent } from './components/attendace/attendace.component';
import { CtaComponent } from './components/cta/cta.component';
import { PartnersComponent } from './components/partners/partners.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { BurgerComponent } from './components/burger/burger.component';
import { FixedbtnComponent } from './components/fixedbtn/fixedbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    AttendaceComponent,
    CtaComponent,
    PartnersComponent,
    GalleryComponent,
    FooterComponent,
    HeaderComponent,
    AdvantagesComponent,
    BurgerComponent,
    FixedbtnComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
