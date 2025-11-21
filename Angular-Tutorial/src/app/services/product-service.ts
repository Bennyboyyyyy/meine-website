import { Injectable } from '@angular/core';
import { FilledProduct, EmptyProduct } from '../home/home';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
produkt: FilledProduct[] | null =[
];
errProdukt: EmptyProduct[] | null =[
]
}