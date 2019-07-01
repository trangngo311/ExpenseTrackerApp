import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  providers: [ExpenseService],
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  expenses: Expense[];
  // private query:string;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
    .subscribe(expenses => this.expenses = expenses);
  }

  addNewExpense(description, amount, date, type): void {
    let id = this.expenseService.genId(this.expenses);
    let expense: Expense = {id:id, description: description, amount:+amount, 
    date: date, type:type};

    this.expenseService.addExpense(expense)
    .subscribe(expense => {
      this.expenses.push(expense);
    });

    this.router.navigate(['/expenses']);
  }

  // onSubmit() {
  //   let id = this.expenseService.genId(this.expenses);
  //   this.expenseService.addExpense(this.expense)
  //   .subscribe(expense => {
  //     this.expenses.push(expense);
  //   });

  //   this.router.navigate(['/expenses']);
  // }

}
