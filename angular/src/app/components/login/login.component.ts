import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule
} from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { trigger, transition, animate, style } from "@angular/animations";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public message: String;
  public showMessage: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.showMessage = false;
  }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onSubmit() {
    this.apiService.login(this.loginForm.value);
    console.log("API MENSAGEM", this.apiService.message);
    this.message = this.apiService.message;
    this.showMessage = this.apiService.showMessage;
  }
}
