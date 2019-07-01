import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from './expense';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
    transform(expenses: Expense[], type: string): any {
        if (!expenses) { return []; }
        return expenses.filter(x => x.type == type);
    }
}