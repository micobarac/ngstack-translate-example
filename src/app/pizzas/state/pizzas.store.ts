import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, ID, StoreConfig, toggle, transaction } from '@datorama/akita';
import { createPizza, Pizza, Topping } from './pizza.model';

export interface PizzasState extends EntityState<Pizza>, ActiveState {}

const initialState = {
  active: null
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'pizzas' })
export class PizzasStore extends EntityStore<PizzasState, Pizza> {
  constructor() {
    super(initialState);
    this.addNewPizza();
  }

  @transaction()
  addNewPizza() {
    const newPizza = createPizza();
    this.add(newPizza);
    this.setActive(newPizza.id);
  }

  toggleTopping(activePizzaID: ID | ID[], topping: Topping) {
    this.update(activePizzaID, pizza => {
      return {
        ...pizza,
        toppings: toggle(pizza.toppings, topping)
      };
    });
  }
}
