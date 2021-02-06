import { SpeciesDetailsComponent } from './species-details.component';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PaginationControlsComponent } from 'ngx-pagination';
import { Component, Pipe, PipeTransform } from '@angular/core';

describe('SpeciesDetailsComponent', () => {
  let component: SpeciesDetailsComponent;
  let fixture: ComponentFixture<SpeciesDetailsComponent>;

  @Component({
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>'
  })
  class MockPaginationControls {}
  @Pipe({name: 'paginate'})
  class MockPipe implements PipeTransform {
      transform(value: number): number {
          //Do stuff here, if you want
          return value;
      }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SpeciesDetailsComponent, MockPaginationControls, MockPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesDetailsComponent);
    component = fixture.componentInstance;
    component.dataList = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
