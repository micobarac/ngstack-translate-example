import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza, Topping } from './pizza.model';
import { PizzasState, PizzasStore } from './pizzas.store';

@Injectable({ providedIn: 'root' })
export class PizzasQuery extends QueryEntity<PizzasState, Pizza> {
  constructor(protected store: PizzasStore) {
    super(store);
  }

  selectPizzaToppings(): Observable<Topping[]> {
    return this.selectActive().pipe(
      map(pizza => {
        return pizza.toppings;
      })
    );
  }
}
