import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './welcome/home/home.component';
import { TableComponent } from './information/table/table.component';
import { InformationComponent } from './welcome/information/information.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  
  },
  {
    path: 'information',
    component: TableComponent
  },
  {
    path: 'information/:id',
    component: InformationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
