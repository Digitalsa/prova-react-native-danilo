import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AddComponent } from "./components/add/add.component";
import { ListComponent } from "./components/list/list.component";
import { DetailComponent } from "./components/list/detail/detail.component";
import { ApiService } from "./services/api.service";
import { routing } from "./app.routing";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthGuardService } from "./guard/auth-guard.service";
import { Error404Component } from './error404/error404.component';
import { MenuComponent } from './components/menu/menu.component';
import { StarsComponent } from './components/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    Error404Component,
    MenuComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
