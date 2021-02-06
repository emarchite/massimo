import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../../services/pages/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public dataPages: any = [];

  constructor(private router: Router, private pagesService: PagesService) { }

  ngOnInit(): void {


    this.pagesService.getPages().subscribe((data) => {

      // normalizamos a un array de objetos con asociacion
      this.dataPages = Object.entries(data);  
      let aux = [];
      this.dataPages.forEach((item, index) => {
        aux[index] = { "title": item[0], "url": item[1]}
      })
      this.dataPages = aux;
    })

  }

}
