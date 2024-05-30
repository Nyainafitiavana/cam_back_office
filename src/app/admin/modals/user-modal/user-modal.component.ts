import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NzModalComponent, NzModalContentDirective, NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormControlComponent, NzFormDirective, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {LoginService} from "../../../login/login.service";
import {ILogin} from "../../../login/login.interface";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {User} from "../../user/user.interface";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [
    NzModalModule,
    NzModalComponent,
    NzModalContentDirective,
    NzSwitchModule,
    NzButtonComponent,
    NzColDirective,
    NzFormControlComponent,
    NzFormDirective,
    NzIconDirective,
    NzInputDirective,
    NzInputGroupComponent,
    NzRowDirective,
    ReactiveFormsModule,
    FormsModule,
    NzFormLabelComponent,
    NgTemplateOutlet
  ],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})
export class UserModalComponent {
  constructor(
    private fb: NonNullableFormBuilder,
  ) {}

  isOkLoading = false;
  @Input() isVisible!: boolean;
  @Input() isEdit!: boolean;
  @Input() isShow!: boolean;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() modalData!: User | undefined;
  isAdmin: boolean = false;

  validateForm: FormGroup<{
    userName: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    isAdmin: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    isAdmin: [false]
  });

  ngOnInit() {
    if (this.modalData) {
      this.validateForm.reset(
        {
          userName : this.modalData.name,
          email : this.modalData.email,
          phone: this.modalData.phone,
          isAdmin: this.modalData.is_admin,
        }
      )

      if (this.isShow) {
        this.validateForm.disable();
      }
    }
  }

  save(): void {
    alert('save');
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  update(uuid: string): void {
    if (this.validateForm.valid && uuid !== '') {
      console.log(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleCancel(): void {
    this.validateForm.reset({userName : '', email : '', phone : '', isAdmin: false});
    this.closeModal.emit();
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }
}
