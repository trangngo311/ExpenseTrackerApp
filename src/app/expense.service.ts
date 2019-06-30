import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { Observable, of, fromEventPattern } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ExpenseService { 

  private expensesUrl = 'api/expenses'; // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  genId(expenses: Expense[]): number {
    return expenses.length > 0 ? 
    Math.max(...expenses.map(expense => expense.id)) + 1 : 100;
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl)
    .pipe(
      catchError(this.handleError<Expense[]>('getHeroes',[]))
    );
  }

  getExpense(id:number): Observable<Expense> {
    const url = `${this.expensesUrl}/${id}`;
    return this.http.get<Expense>(url).pipe(
      catchError(this.handleError<Expense>(`getExpense id=${id}`))
    );
  }

  updateExpense(expense: Expense): Observable<any> {
    return this.http.put(this.expensesUrl, expense, httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateExpense'))
    );
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expensesUrl, expense, httpOptions)
    .pipe(
      catchError(this.handleError<any>('addExpense'))
    );
  }

  deleteExpense(expense: Expense | number): Observable<Expense> {
    const id = typeof expense === 'number' ? expense: expense.id;
    const url = `${this.expensesUrl}/${id}`;

    return this.http.delete<Expense>(url, httpOptions).pipe(
      catchError(this.handleError<Expense>('deleteExpense'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
