import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  getInitialActiveState,
  ID,
  StoreConfig,
  toggle,
  transaction
} from '@datorama/akita';
import { createPizza, Pizza, Topping } from './pizza.model';

export interface PizzasState extends EntityState<Pizza>, ActiveState {}

const state = {
  ...getInitialActiveState()
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'pizzas' })
export class PizzasStore extends EntityStore<PizzasState, Pizza> {
  constructor() {
    super(state);
    this.addNewPizza();
  }

  @transaction()
  addNewPizza() {
    const newPizza = createPizza();
    this.add(newPizza);
    this.setActive(newPizza.id);
  }

  toggleTopping(activePizzaID: ID, topping: Topping) {
    this.update(activePizzaID, pizza => {
      return {
        ...pizza,
        toppings: toggle(pizza.toppings, topping)
      };
    });
  }
}
