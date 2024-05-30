import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormControlComponent, NzFormDirective} from "ng-zorro-antd/form";
import {FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {LoginService} from "./login.service";
import {ILogin} from "./login.interface";
@Component({
  selector: 'nz-demo-form-normal-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzCardComponent,
    NzRowDirective,
    NzColDirective,
    NzFormDirective,
    ReactiveFormsModule,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzInputDirective,
    NzButtonComponent,
    NzIconDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private readonly loginService: LoginService,
  ) {}

  passwordVisible = false;
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginService.postLogin(this.validateForm.value as ILogin);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
