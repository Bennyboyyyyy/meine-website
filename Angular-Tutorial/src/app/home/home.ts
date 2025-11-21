import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogProduct } from '../dialog-product/dialog-product';
import { ProductService } from '../services/product-service';


export interface FilledProduct {
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
}

export interface EmptyProduct {
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})


export class Home implements OnInit {
  dialog = inject(MatDialog);

  constructor(public service: ProductService) {

  }

  openDialog() {
    this.dialog.open(DialogProduct, {

    });
  }

  quantity1 = 0;

  ngOnInit() {
    let i: number;

    if (localStorage.length) {
      for (i = 0; (localStorage.length) > i; i) {
        i++
        let importKeynameProductKey = "ProductKey" + i
        let localProductKey = localStorage!.getItem(importKeynameProductKey);
        if (localProductKey) {
          this.service.produkt?.push(JSON.parse(localProductKey));
        }
        //  else {
        //  console.log("Import failed")
        //  numberProductKey--
        //  i--
        //  localStorage.setItem("NPK", JSON.stringify(numberProductKey))
        //  }
      }


      // for (done; done == false; done) {
      //   let importKeynameProductKey = "ProductKey" + (i + 1);
      //   let localProductKey = localStorage!.getItem(importKeynameProductKey);
      //   if (typeof localProductKey !== "string") {
      //     done = true
      //   }
      //   else {
      //     this.service.produkt?.push(JSON.parse(localProductKey!));
      //     i++
      //     numberProductKey++
      //     localStorage.setItem("NPK", JSON.stringify(numberProductKey))
      //   }
      // }
    }
    if (localStorage.length == 0) {
      let errorProduct: EmptyProduct = {
        name: "(Keine Produkte vorhanden!)",
        description: "Klicke auf 'Open Dialog' um ein Produkt zu erstellen!",
        price: 404,
        rating: 404,
        image: "https://icon-library.com/images/sad-face-icon-png/sad-face-icon-png-6.jpg"
      }
      this.service.errProdukt?.push(JSON.parse(JSON.stringify(errorProduct)));
    }
  }

  onClick1() {
    this.quantity1 += 1
    console.log(this.quantity1)
    if (this.service.produkt == null) {
      console.log("Objekt leer")
    }
    else {
      console.log(this.service.produkt);
    }

  }
}
