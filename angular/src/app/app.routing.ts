import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { AddComponent } from "./components/add/add.component";
import { LoginComponent } from "./components/login/login.component";
const APP_ROUTES: Routes = [
  { path: "usuarios", component: ListComponent },
  {
    path: "adicionar",
    component: AddComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
