import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { PrincipalComponent } from './principal.component';
import { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
  { 
    path: '', component: PrincipalComponent,
  children: [
    { path: 'ships', component: ShipsComponent },
    { path: 'pageOne', component: PageOneComponent },
    { path: 'pageTwo', component: PageTwoComponent },
    { path: 'logout', component: LogoutComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }