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
      restaurant : '',
      location:'',
      contact:''
    }
    this.added = false;
  }

  addFood(event, food) {
    this.confirm_order_food = {
      name : food.name,
      quantity : food.quantity,
      restaurant : food.restaurant,
      location : food.location,
      contact : food.contact
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
        contact: '022-27556546',
        location: 'Vidyavihar',
      },
      {
        name:'Chole Bhature',
        quantity:6.9,
        restaurant:'Bhagat Tarachand',
        contact: '022-27556789',
        location: 'Mulund',
      },
      {
        name:'Dal Makhani',
        quantity:2.7,
        restaurant:'Utsav',
        contact: '022-27559067',
        location: 'Thane(West)',
      },
      {
        name:'Aloo Fry',
        quantity:3.8,
        restaurant:'The Food Studio',
        contact: '022-27547634',
        location: 'Ghatkopar(East)',
      },
      {
        name:'Paalak Paneer',
        quantity:4.6,
        restaurant:'Kailash Parbat',
        contact: '022-27650987',
        location: 'Seawoods',
      },
      {
        name:'Veg Pulav',
        quantity:5.1,
        restaurant:'Navratna',
        contact: '022-27532314',
        location: 'Vashi',
      }
    ];
    this.confirm_food_list = [];
    this.added = false;
  }

}
