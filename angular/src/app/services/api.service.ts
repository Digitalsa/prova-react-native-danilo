import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import baseApi from "../config/baseApi";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  private isAutenticado: boolean = false;
  public message: String = "";
  public showMessage: boolean = false;
  public infoProfile: any;
  urlApi = "http://34.192.62.185:3256/api";

  constructor(private http: HttpClient, private router: Router) {
    console.log(baseApi);
    this.isAutenticado = false;
  }
  list() {
    return this.http.get<any[]>(`${this.urlApi}/usuarios`);
  }
  delete(item) {
    console.log("DELETANDO", item);
    const DELURL = `${this.urlApi}/usuarios/delete/${item.item}`;
    fetch(DELURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(res) {
        console.log(res);
      });
  }
  adicionar(item) {
    const ADDURL = `${this.urlApi}/usuarios/novo`;

    return fetch(ADDURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(item)
    });
  }
  login(item) {
    console.log("Dado do login", item);
    const LOGINURL = `${this.urlApi}/login`;
    return fetch(LOGINURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(item)
    })
      .then(resposta => resposta.json())
      .then(json => {
        if (json.status === false) {
          this.isAutenticado = false;
          this.router.navigate(["/login"]);
          this.showMessage = true;
          this.message = "Usuário e/ou senha não encontrados";
        } else {
          this.isAutenticado = true;
          this.router.navigate(["/usuarios"]);
          this.showMessage = false;
          this.infoProfile = json.result;
        }
      });
  }
  edit(item) {
    const deleteReq = `${this.urlApi}/usuarios/delete/${item}`;
    fetch(deleteReq, {
      method: "DELETE"
    })
      .then(resposta => resposta.json())
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log("Erro", err);
      });
  }
  usuarioAutenticado() {
    console.log("Está autenticado ou não ?", this.isAutenticado);

    return this.isAutenticado;
  }
  logout() {
    this.isAutenticado = false;
    this.router.navigate(["/login"]);
  }
  starApi() {
    const url = "https://swapi.co/api/films";
    return fetch(url);
  }
}
