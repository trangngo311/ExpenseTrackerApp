import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'expenses', pathMatch: 'full'},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'expense-edit/:id', component: ExpenseEditComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
