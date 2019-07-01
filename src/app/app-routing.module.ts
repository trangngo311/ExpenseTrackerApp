import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'expenses', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LogInComponent},
  {path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard]},
  {path: 'expense-edit/:id', component: ExpenseEditComponent},
  {path: 'expense-add', component: ExpenseAddComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
