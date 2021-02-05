import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';
import { HttpClientModule } from '@angular/common/http'; 

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';

// Services
import { LoginService } from './services/login/login.service';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,
    HttpClientModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
