export class Expense {
    id:number;
    description:string;
    amount:number;
    date:string;
    type:string;

    constructor(id:number, description:string,
        amount:number, date:string, type:string){
            this.id = id;
            this.description = description;
            this.amount = amount;
            this.date = date;
            this.type = type;
        }
}