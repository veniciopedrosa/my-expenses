import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/expenses', 
    pathMatch: 'full' 
  },
  { 
    path: 'expenses', 
    component: ExpensesListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
