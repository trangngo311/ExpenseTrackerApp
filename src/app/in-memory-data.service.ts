import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Expense } from './expense';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const expenses = [
      {id:100, description:"Lyft to work", amount: 7.58, date:"06-27-2019", type:"Travel"},
      {id:101, description:"Asian Food Store", amount: 35.55, date:"06-25-2019", type:"Grocery"},
      {id:102, description:"Little Sheep Hotpot", amount: 75.32, date:"06-24-2019", type:"Restaurants"},
      {id:103, description:"Xfinity Internet", amount: 40.00, date:"05-21-2019", type:"Utility"},
      {id:104, description:"T-Mobile Phone Bill", amount: 7.58, date:"05-24-2019", type:"Utility"},
      {id:105, description:"Cracking the Coding Interview Book", amount: 25.99, date:"05-15-2019", type:"Education"},
      {id:106, description:"Lyft to work", amount: 7.58, date:"05-27-2019", type:"Travel"},
      {id:107, description:"Hmart Grocery", amount: 42.56, date:"06-14-2019", type:"Grocery"},
      {id:108, description:"Paris Baguette", amount: 27.58, date:"06-08-2019", type:"Grocery"},
      {id:109, description:"BT21 Portable Speaker", amount: 75.03, date:"07-04-2019", type:"Entertainment"},
      {id:110, description:"Movie Ticket to MIB: International", amount: 13.15, date:"06-27-2019", type:"Entertainmemt"},
      {id:111, description:"Dartmouth Coach Ticket to NYC", amount: 70.42, date:"05-30-2019", type:"Travel"},
      {id:112, description:"Coursera Deep Learning Specialization Subscription", amount: 49.00, date:"07-07-2019", type:"Education"},
      {id:113, description:"Business Pants", amount: 25.99, date:"07-06-2019", type:"Clothing"},
      {id:114, description:"Chinese Food", amount: 27.35, date:"06-26-2019", type:"Restaurants"},
      {id:115, description:"Eye exam", amount: 75.86, date:"07-05-2019", type:"Healthcare"},
  ];
  
  const users = [
    {id:100, name: "Adrianne", username: "adrianne", email: "adrianne@something.com", password: "Koala1460"},
    {id:101, name: "Bermuda", username: "bermuda", email: "bermuda@something.com", password: "Koala1460"},
    {id:102, name: "Caroline", username: "caroline", email: "caroline@something.com", password: "Koala1460"},
    {id:103, name: "Danny", username: "danny", email: "danny@something.com", password: "Koala1460"},
    {id:104, name: "Elizabeth", username: "elizabeth", email: "elizabeth@something.com", password: "Koala1460"},
    {id:105, name: "Francis", username: "francis", email: "francis@something.com", password: "Koala1460"},
    {id:106, name: "Graham", username: "graham", email: "graham@something.com", password: "Koala1460"},
    {id:107, name: "Hector", username: "hector", email: "hector@something.com", password: "Koala1460"},
    {id:108, name: "Ian", username: "ian", email: "ian@something.com", password: "Koala1460"},
    {id:109, name: "Jane", username: "jane", email: "jane@something.com", password: "Koala1460"},
];
return {expenses, users};
  }  

  genId<T extends Expense | User>(arr: T[]): number {
    return arr.length > 0 ? Math.max(...arr.map(item => item.id)) + 1 : 100;
  }

}
