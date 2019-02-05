import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Topping } from './pizza.model';
import { PizzasStore } from './pizzas.store';

@Injectable({ providedIn: 'root' })
export class PizzasService {
  constructor(private pizzasStore: PizzasStore) {}

  add() {
    this.pizzasStore.addNewPizza();
  }

  setActivePizza(id: ID | ID[]) {
    this.pizzasStore.setActive(id);
  }

  toggleTopping(activePizzaID: ID | ID[], topping: Topping) {
    this.pizzasStore.toggleTopping(activePizzaID, topping);
  }
}
