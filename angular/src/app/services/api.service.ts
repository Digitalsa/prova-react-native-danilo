import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import baseApi from "../config/baseApi";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  urlApi = "http://34.192.62.185:3256/api";
  constructor(private http: HttpClient) {
    console.log(baseApi);
  }
  list() {
    return this.http.get<any[]>(`${this.urlApi}/usuarios`);
  }
  delete(item) {
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
}
