import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../interfaces/user';

// JSON
// import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  // users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private _loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(3)]]
    });
    (localStorage.getItem('usuario') != null) ? this.router.navigate(['/principal/ships']) : null;
  }
  
  loginUser() {
    if (this.loginForm.invalid) { return }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    // var userLogin = this.loginForm.value.username;
    // var filterJson = this.users.filter(function (user) { return user.first_name === userLogin  });

    this.dataLoading = true;

    /** Hacemos la llamada para traernos con un servicio los usuarios */
    this._loginService.getLogin().subscribe(
      datosLogin => {

        this.dataLoading = false;
        // console.log(datosLogin);


        datosLogin.forEach(obj => {
          (obj.username == this.loginForm.value.username && obj.password == this.loginForm.value.password) ? localStorage.setItem('usuario', this.loginForm.value.username) : null;
        });

        (localStorage.getItem('usuario') == null) ? this.unregistered = true : this.router.navigate(['/principal/ships']);

      },
      err => {
        this.dataLoading = false;
        console.log(err);
      }
    );


    // if (filterJson.length > 0) {
    //   this.router.navigate(['/principal/ships'])
    // } else {
    //   this.unregistered = true;
    // }

  }
}

