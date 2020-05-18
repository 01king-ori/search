import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomepageComponent } from './components/homepage/homepage.component';
import { ResultsComponent } from './components/results/results.component';
import { ErrorComponent } from './components/error/error.component';
import { UserComponentComponent } from './components/user-component/user-component.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'my-profile', component: UserComponentComponent},
  { path: 'search-result/:username', component: ResultsComponent},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
