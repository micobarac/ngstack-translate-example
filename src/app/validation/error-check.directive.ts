import { Directive, Host, HostBinding, Self, SkipSelf } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

@Directive({
  selector: '[appErrorCheck]'
})
export class ErrorCheckDirective {
  @HostBinding('class.is-invalid')
  get isInvalid() {
    return this.control.invalid && (this.control.dirty || this.form.submitted);
  }

  constructor(@Host() @SkipSelf() private form: FormGroupDirective, @Self() private control: NgControl) {}
}
