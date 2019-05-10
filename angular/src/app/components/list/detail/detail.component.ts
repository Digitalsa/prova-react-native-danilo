import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  @Input() detailUser: string;
  @Output() myOutput = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  registroSelecionadoExclusao(item) {
    this.myOutput.emit({ item: item });
  }
}
