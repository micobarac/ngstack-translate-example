import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngstack/translate';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzasComponent } from './pizzas.component';

@NgModule({
  declarations: [PizzasComponent],
  imports: [CommonModule, PizzasRoutingModule, TranslateModule.forChild()]
})
export class PizzasModule {}
