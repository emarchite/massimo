import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeciesService } from '../../services/species/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  public dataList: any = [];

  constructor( private speciesService: SpeciesService) {}

  ngOnInit(): void {
    this.speciesService.getSpecies().subscribe((species) => {
      this.dataList = species;
      // console.log('Species -->', this.dataList.results)
    })
  }
}
