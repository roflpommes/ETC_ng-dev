import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FoodModule } from './food/food.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidemenuComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FoodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
