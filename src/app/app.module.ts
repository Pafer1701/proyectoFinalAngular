import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { RegisterUserComponent } from './componentes/register-user/register-user.component';
import { UsersComponent } from './componentes/users/users.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const appRoutes:Routes=[
  {path:'cabecera',component:CabeceraComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'users',component:UsersComponent},
  {path:'home',component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    RegisterUserComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
