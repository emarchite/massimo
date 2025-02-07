import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../../services/pages/pages.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public dataPages: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    (localStorage.getItem('usuario') == null) ? this.router.navigate(['']) : null;
    // console.log(localStorage.getItem('usuario'));
  }

}
