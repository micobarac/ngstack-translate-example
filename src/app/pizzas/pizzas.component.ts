import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Pizza, PizzasQuery, PizzasService, Topping, toppingsList } from './state';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;
  activePizzaToppings$: Observable<Topping[]>;
  toppings: Topping[];

  get activePizzaId(): ID {
    return this.pizzasQuery.getActiveId();
  }

  constructor(private pizzasQuery: PizzasQuery, private pizzasService: PizzasService) {}

  ngOnInit() {
    this.pizzas$ = this.pizzasQuery.selectAll();
    this.activePizzaToppings$ = this.pizzasQuery.selectPizzaToppings();
    this.toppings = toppingsList;
  }

  newPizza() {
    this.pizzasService.add();
  }

  toggleTopping(topping: Topping) {
    this.pizzasService.toggleTopping(this.pizzasQuery.getActiveId(), topping);
  }

  setActivePizza(id: ID) {
    this.pizzasService.setActivePizza(id);
  }
}
