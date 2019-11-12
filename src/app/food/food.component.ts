import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food_object:any;
  food_list:any;
  confirm_order_food:any;
  added:boolean;
  confirmed:boolean;
  confirm_food_list:any;
  constructor() {
    this.confirm_order_food = {
      name : '',
      quantity : 0.0,
      restaurant : ''
    }
    this.added = false;
  }

  addFood(event, food) {
    this.confirm_order_food = {
      name : food.name,
      quantity : food.quantity,
      restaurant : food.restaurant
    };
    this.added = true;
  }

  confirm(event) {
    const confirm_order_food = this.confirm_order_food;
    this.food_list = this.food_list.filter(function(food) {
      return food.name != confirm_order_food.name || food.quantity != confirm_order_food.quantity || food.restaurant != confirm_order_food.restaurant
    })
    this.added = false;
    this.confirmed = true;
    this.confirm_food_list.push(confirm_order_food)
  }

  ngOnInit() {
    this.food_list = [
      {
        name:'Pav Bhaji',
        quantity:3.5,
        restaurant:'Shiv Sagar',
      },
      {
        name:'Chole Bhature',
        quantity:6.9,
        restaurant:'Bhagat Tarachand',
      }
    ];
    this.confirm_food_list = [];
    this.added = false;
  }

}
