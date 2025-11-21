import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product-service';
import { FilledProduct, EmptyProduct } from '../home/home';



@Component({
  selector: 'app-dialog-product',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './dialog-product.html',
  styleUrl: './dialog-product.scss',
})
export class DialogProduct {

  service = inject(ProductService);
  dialogRef = inject(MatDialogRef<DialogProduct>);

  form = new FormGroup({

    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    desc: new FormControl("", [Validators.required, Validators.minLength(5)]),
    price: new FormControl<number | null>(null, Validators.required),
    image: new FormControl("", Validators.required)
  })

  close() {
    this.dialogRef.close();
    console.log(this.form.controls.name.value, this.form.controls.desc.value, this.form.controls.price.value);
  }

  // pushToLocalStorage() {
  //   localStorage.setItem("ProductKey", "Test")
  // }

  send() {
    if (this.form.controls.name.valid && this.form.controls.price.valid && this.form.controls.image.valid && this.form.controls.desc.valid) {
      let productKey: FilledProduct = {
        name: this.form.controls.name.value!,
        description: this.form.controls.desc.value!,
        price: this.form.controls.price.value!,
        rating: 4.9,
        image: this.form.controls.image.value!
      }
      if (localStorage.length != 0) {
        this.service.produkt?.push(
          productKey
        )
      }
      else {
        this.service.errProdukt?.splice(0, 1)
        this.service.produkt?.push(
          productKey
        )
      }
      this.dialogRef.close();
      localStorage.setItem(("ProductKey" + (localStorage.length + 1)), JSON.stringify(productKey))
    }
    else {
      alert('Something is wrong!')
    }
  }
}