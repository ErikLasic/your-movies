import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

/*
const routes: Routes = [
  { path: '', redirectTo: '/places', pathMatch: 'full' },
  { path: 'places', component: ContainerComponent },
  { path: 'places/:place_id', component: PlacesDetailsComponent },
  { path: 'about', component: TestComponent }
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
