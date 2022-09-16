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
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingComponent } from './shared/loading/loading.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthModule } from '@angular/fire/auth';
import { FbAuthModule } from './fbauth/fbauth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidemenuComponent,
    NavbarComponent,
    AboutComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FoodModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthModule,
    FbAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
