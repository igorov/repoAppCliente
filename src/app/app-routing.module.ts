import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'add-cliente', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
