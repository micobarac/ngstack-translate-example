import { Component, Host, Input, OnInit, SkipSelf } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() name: string;
  @Input() error: string;

  constructor(@Host() @SkipSelf() private form: FormGroupDirective) {}

  ngOnInit() {}

  get isInvalid() {
    const control = this.form.control.get(this.name);
    return control.hasError(this.error) && (control.dirty || this.form.submitted);
  }
}
