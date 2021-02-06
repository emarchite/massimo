import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from '../ships/ships.component';
import { SpeciesComponent } from '../species/species.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { PrincipalComponent } from './principal.component';
import { LogoutComponent } from '../logout/logout.component';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
  { 
    path: '', component: PrincipalComponent,
  children: [
    { path: 'ships', component: ShipsComponent },
    { path: 'species', component: SpeciesComponent },
    { path: 'pageOne', component: PageOneComponent },
    { path: 'pageTwo', component: PageTwoComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'pages', component: PagesComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }