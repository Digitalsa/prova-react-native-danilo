import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit {
  public stars = [];

  constructor(private starApi: ApiService) {}

  ngOnInit() {
    this.starApi
      .starApi()
      .then(resp => resp.json())
      .then(json => {
        json.results.forEach(row => {
          this.stars.push(row);
        });
      });
    console.log(this.stars);
  }
}
