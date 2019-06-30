import { Component, Input } from '@angular/core';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {

  @Input() expense: Expense;

  submitted = false;
  
  onSubmit() {this.submitted = true; }

  // get diagnostic() {return JSON.stringify(this.modelE);}
}
