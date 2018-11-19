import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngstack/translate';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomerListComponent],
  imports: [CommonModule, CustomersRoutingModule, TranslateModule.forChild()]
})
export class CustomersModule {}
