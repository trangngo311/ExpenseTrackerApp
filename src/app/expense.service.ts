import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './mock-expenses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService { 

  constructor() { }

  getExpenses(): Observable<Expense[]> {
    return of(EXPENSES);
  }

  getExpense(id:number): Observable<Expense> {
    return of(EXPENSES.find(expense => expense.id === id));
  }
}
