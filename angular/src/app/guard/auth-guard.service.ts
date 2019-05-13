import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from "@angular/router";

import { ApiService } from "../services/api.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: ApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log("AuthGuard");

    if (this.authService.usuarioAutenticado()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
