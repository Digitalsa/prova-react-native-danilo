import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  users: Array<any>;
  private routerAdicionar: String = "/adicionar";

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.listar();
  }
  onDeletarRegistro(evento) {
    console.log(this.api.delete(evento));
  }
  onEditarRegistro(evento) {
    this.api
      .edit(evento)
      .then(resposta => resposta.json())
      .then(json => {
        console.log(json);
        this.listar();
      })
      .catch(err => console.log(err));
  }
  listar() {
    this.api.list().subscribe(
      res => {
        this.users = res;
      },
      err => {}
    );
  }
}
