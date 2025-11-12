import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { About } from '../about/about';
import { Dialog } from '@angular/cdk/dialog';
import { DialogProduct } from '../dialog-product/dialog-product';


export interface Product {
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


export class Home {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogProduct, {
      
    });
  }

  quantity1 = 0;

  produkt: Product[] | null = null;

  constructor() {
    this.produkt = [
      {
        description: "Teuere Uhr",
        name: "Apple Watch",
        price: 599,
        rating: 4.9,
        image: "https://flowbite.com/docs/images/products/apple-watch.png",
      },
      {
        description: "Noch besser (haben wir einen anderen Spruch?)",
        name: "iPhone",
        price: 1299,
        rating: 4.9,
        image: "https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/a9d1d79e-2551-4cad-ae9d-b0fe934f1d25-1_f2451eae-c51b-40e5-a170-a7db037c9301.jpg",

      },
      {
        description: "Teueres Tablet",
        name: "iPad",
        price: 899,
        rating: 4.9,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0jS9CDxwTj-Pb6W0mO8Rvvh8B_UrMWlKVpZLIWp4VCEF212wBcP2ub0jqK6Zk7bZH_GVIsYrPxH7DfDhJrgHnFqNaxj2P4odsuDdLdGXMerWABteLqmLZYjZZvFJgTg&usqp=CAc",
      },
      {
        description: "scamBook",
        name: "macBook",
        price: 2999,
        rating: 4.9,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzdj3tTsz2U76R9ih3_jNKxTiFJK8dWYk_NR21xc_ZMeI5pbjOja9XsOtSZORyvAhem7xsIB0CKHL_2Udahl3M3BlCwjX7LP1DLXgDq7kJ7TLn2jqVwap5ZpW0V8y4Y_FK9HGb&usqp=CAc",
      },
      {
        description: "Kopfhörer",
        name: "AirPods",
        price: 299,
        rating: 4.9,
        image: "data:image/webp;base64,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",
      }
    ]
  }
  onClick1() {
    this.quantity1 += 1
    console.log(this.quantity1)
    if (this.produkt == null) {
      console.log("Objekt leer")
    }
    else {
      console.log(this.produkt);
    }

  }
}
