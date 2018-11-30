import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngstack/translate';
import { ErrorMessageComponent } from '../validation/error-message.component';
import { ErrorCheckDirective } from '../validation/error-check.directive';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent, ErrorMessageComponent, ErrorCheckDirective],
  imports: [CommonModule, ReactiveFormsModule, RegistrationRoutingModule, TranslateModule.forChild()]
})
export class RegistrationModule {}
