import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzCardComponent,
    NzRowDirective,
    NzColDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

}
