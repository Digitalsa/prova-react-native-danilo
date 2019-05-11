import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { AddComponent } from "./components/add/add.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from "./guard/auth-guard.service";
import { Error404Component } from "./error404/error404.component";
import { StarsComponent } from "./components/stars/stars.component";
const APP_ROUTES: Routes = [
  {
    path: "",
    component: Error404Component
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "usuarios",
    component: ListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "stars",
    component: StarsComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: "adicionar",
    component: AddComponent,
    canActivate: [AuthGuardService]
  },
  { path: "**", component: Error404Component }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
