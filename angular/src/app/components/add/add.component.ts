import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  usuario: any = {};

  constructor(
    private _Activatedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}
  addForm: FormGroup;

  ngOnInit() {
    this.iniciaFormulario();
    if (
      this._Activatedroute.snapshot.params["id"] &&
      this._Activatedroute.snapshot.params["id"] > 0
    ) {
      this.finByIdUser(this._Activatedroute.snapshot.params["id"]);
    }
  }
  iniciaFormulario() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ["", Validators.required],
      nome: ["", Validators.required],
      password: ["", Validators.required],
      celular: ["", Validators.required]
    });
  }

  finByIdUser(id) {
    this.apiService
      .findByID(id)
      .then(resp => resp.json())
      .then(json => {
        this.usuario = json;
        this.usuario.password = "";
      });
  }
  onSubmit() {
    console.log("Model usuario", this.usuario);
    console.log("Formulario", this.addForm.value);
    if (this.usuario.id > 0) {
      this.apiService
        .edit(this.usuario)
        .then(suc => {
          console.log(suc);
          this.router.navigate(["/usuarios"]);
        })
        .catch(err => console.log(err));
    } else {
      this.apiService.adicionar(this.addForm.value).then(suc => {
        if (suc) {
        }
      });
    }
  }
  onListUser() {
    this.router.navigate(["/usuarios"]);
  }
}
