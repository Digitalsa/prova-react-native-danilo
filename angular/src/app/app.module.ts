import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AddComponent } from "./components/add/add.component";
import { ListComponent } from "./components/list/list.component";
import { DetailComponent } from "./components/list/detail/detail.component";
import { ApiService } from "./services/api.service";
import { routing } from "./app.routing";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, AddComponent, ListComponent, DetailComponent, LoginComponent],
  imports: [BrowserModule, HttpClientModule, routing],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
