import { Component, OnInit, SimpleChange } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  public info;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.info = this.api.infoProfile.nome;
    console.log("DADOS DA INFORMACAO", this.info);
  }
  Sair() {
    this.api.logout();
  }
}
