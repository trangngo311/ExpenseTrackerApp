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
