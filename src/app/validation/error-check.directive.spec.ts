import { TestBed } from '@angular/core/testing';
import { FormControlDirective, FormGroupDirective } from '@angular/forms';
import { ErrorCheckDirective } from './error-check.directive';

describe('ErrorCheckDirective', () => {
  it('should create an instance', () => {
    const form = TestBed.createComponent(FormGroupDirective);
    const control = TestBed.createComponent(FormControlDirective);
    const directive = new ErrorCheckDirective(form.componentInstance, control.componentInstance);
    expect(directive).toBeTruthy();
  });
});
