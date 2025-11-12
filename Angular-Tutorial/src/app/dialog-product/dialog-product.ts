import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dialog-product',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './dialog-product.html',
  styleUrl: './dialog-product.scss',
})
export class DialogProduct {

  form = new FormGroup({

    name: new FormControl("",[Validators.required, Validators.minLength(5)]),
    desc: new FormControl("",[Validators.required, Validators.minLength(10)]),
    price: new FormControl("", Validators.required)
  })

  readonly dialogRef = inject(MatDialogRef<DialogProduct>);
  send() {
    this.dialogRef.close();
    console.log(this.form.controls.name.value, this.form.controls.desc.value, this.form.controls.price.value);
  }
}
