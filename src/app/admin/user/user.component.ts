import { Component } from '@angular/core';
import {User} from "./user.interface";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzTableComponent, NzTableModule} from "ng-zorro-antd/table";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {UserModalComponent} from "../modals/user-modal/user-modal.component";
import {NzModalComponent} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzTableModule,
    NzColDirective,
    NzRowDirective,
    NzButtonComponent,
    NzIconDirective,
    UserModalComponent,
    NzModalComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  listOfData: User[] = [
    {
      uuid: 'uui-145-445',
      name: 'Ny Aina',
      is_admin: true,
      email: 'aina@gmail.com',
      phone: '0324564464',
    },
    {
      uuid: 'uui-145-446',
      name: 'Fahendrena',
      is_admin: false,
      email: 'fahendrena@gmail.com',
      phone: '0324564464',
    },
    {
      uuid: 'uui-145-447',
      name: 'Nombana',
      is_admin: false,
      email: 'nombana@gmail.com',
      phone: '0324564464',
    },
  ];
  modalData: User | undefined;

  isVisible: boolean = false;
  isEdit: boolean = false;
  isShow: boolean = false;

  openModal(isEdit: boolean, isShow: boolean, index: any): void {
    if (index != null) {
      this.modalData = this.listOfData[index];
    }

    this.isEdit = isEdit;
    this.isShow = isShow;
    this.isVisible = true;
  }

  hideModal(): void {
    this.isVisible = false;
    this.modalData = undefined;
  }
}
