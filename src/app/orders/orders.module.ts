import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngstack/translate';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, OrdersRoutingModule, TranslateModule.forChild()]
})
export class OrdersModule {}
