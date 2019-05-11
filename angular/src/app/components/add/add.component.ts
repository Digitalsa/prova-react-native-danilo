import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule
} from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ["", Validators.required],
      nome: ["", Validators.required],
      password: ["", Validators.required],
      celular: ["", Validators.required]
    });
  }
  onSubmit() {
    this.apiService.adicionar(this.addForm.value).then(suc => {
      if (suc) {
        this.router.navigate(["/usuarios"]);
      }
    });
  }
  onListUser() {
    this.router.navigate(["/usuarios"]);
  }
}
