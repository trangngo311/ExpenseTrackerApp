import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  providers: [ExpenseService],
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  expense: Expense;

  expenses: Expense[];

  submitted = false;

  constructor(
    private expenseService: ExpenseService,
  ) {}

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
    .subscribe(expenses => this.expenses = expenses);
  }

  // onSubmit() {
  //   this.submitted = true;
  //   this.newExpense();
  // }

  newExpense(): void {
    const dummyExpense = {id: 200,
    description: "New Expense",
    amount: 23.25,
    date: "06-30-2019",
    type: "Celebration"};
    this.expenseService.addExpense(dummyExpense)
    .subscribe(expense => {
      this.expenses.push(expense);
    });
  }

}
