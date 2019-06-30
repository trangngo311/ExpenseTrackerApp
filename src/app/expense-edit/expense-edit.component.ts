import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Expense } from '../expense';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css'],
})
export class ExpenseEditComponent implements OnInit {
  
  @Input() expense: Expense;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private location: Location,
  ){}

  ngOnInit() {
    this.getExpense();
  }

  getExpense(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.expenseService.getExpense(id)
    .subscribe(expense => this.expense = expense);
  }

  save(): void {
    this.expenseService.updateExpense(this.expense)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
