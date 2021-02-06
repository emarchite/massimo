import { Component, OnInit, Input } from '@angular/core';
declare var $: any;


@Component({
  selector: 'species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  specieId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  language: string = '';
  classification: string = '';

  constructor() { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  getSpecieId(url) {
    this.specieId  = url.match(/\d+/g).map(Number)[0]; // sacamos el valor numerico, nos devuelve un array y tomamos la posicion 0 con el valor
    const urlImage = 'https://starwars-visualguide.com/assets/img/species/' + this.specieId + '.jpg'
    // console.log(urlImage);
    return urlImage;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.language = details.language;
    this.classification = details.classification
  }

}
