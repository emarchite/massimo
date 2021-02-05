import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';
import { User } from '../../interfaces/user';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;
  user: User;
  msgError: boolean = false;
  msg = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _registerService: RegisterService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ 'test', [Validators.required, Validators.minLength(3)]],
      last_name: [ 'test', [Validators.required, Validators.minLength(3)]],
      username: [ 'test', [Validators.required, Validators.minLength(3)]],
      email: [ 'test@test.com', [Validators.required, Validators.minLength(6)]],
      password: [ 'test', [Validators.required, Validators.minLength(3)]],

    })
  }

  registerUser() {
    if (this.registerForm.invalid) { return }

    // TODO : Falta integrar el servicio para registrar al usuario
    // JSON simulando usuarios
    // var userLogin = this.registerForm.value;
    // usersList.push(userLogin)
    // console.log('User Register -->', usersList)
    // this.router.navigate(['/principal/ships'])

    this.user = this.registerForm.value;

    // **********          CASO con API de terceros      *****************
    this._registerService.addUser(this.user).subscribe(
      response => {
        console.log(response);
        this.msg = (response.token) ? "Usuario creado correctamente." : null

        // ***********    2 opciones: limpiar formulario o hacer login y redireccionar al dashboard      *********

        // localStorage.setItem('token', response.token) // en este caso podemos hacerlo con token por que la API de terceros trae token
        // (localStorage.getItem('token') != undefined) ? this.router.navigate(['/principal/ships']) : null;

        // localStorage.setItem('usuario', this.user.UserName);
        // (localStorage.getItem('usuario') != undefined) ? this.router.navigate(['/principal/ships']) : null;

        this.registerForm.reset(); // Una vez dado ok el formulario, lo limpiamos

      },
      err => {
        this.msg = err.error.error;
        this.dataLoading = false;
        this.msgError = true;
        console.log(err);
      }
    );

  }

}
