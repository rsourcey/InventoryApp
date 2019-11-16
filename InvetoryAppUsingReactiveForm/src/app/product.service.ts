import { IProduct } from './models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [
    {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    },
    {
      id: generatedId(),
      name: 'windows phone',
      active: true,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: true,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }
    , {
      id: generatedId(),
      name: 'windows phone',
      active: true,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generatedId(),
      name: 'windows phone',
      active: false,
      description: '3rd hand',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }
  ];

  product$ = new BehaviorSubject<IProduct[]>(this.products);

  constructor() { }

  removeProduct(product: IProduct): void {
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ];
    this.product$.next(this.products);
  }
}

function generatedId() {
  return Math.floor(Math.random() * 1000);
}
