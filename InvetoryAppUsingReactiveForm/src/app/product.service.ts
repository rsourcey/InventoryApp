import { IProduct } from './models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [{
    id: generatedId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generatedId(),
    name: 'IPhone XR',
    active: true,
    description: 'Like Brand New',
    expirationDate: '01/14/2019',
    type: 'mobile'
  }, {
    id: generatedId(),
    name: 'Samsung S9',
    active: true,
    description: 'Like Brand New',
    expirationDate: '01/13/2019',
    type: 'mobile'
  }, {
    id: generatedId(),
    name: 'Samsung Note 8',
    active: true,
    description: 'Like Brand New',
    expirationDate: '01/12/2019',
    type: 'mobile'
  }, {
    id: generatedId(),
    name: 'LG Phone',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/11/2019',
    type: 'mobile'
  }, {
    id: generatedId(),
    name: 'IPad Pro',
    active: true,
    description: 'Like Brand New',
    expirationDate: '01/10/2019',
    type: 'tablet'
  }, {
    id: generatedId(),
    name: 'Macbook Pro',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/9/2019',
    type: 'computer'
  }, {
    id: generatedId(),
    name: 'HP Thinkbook',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/8/2019',
    type: 'computer'
  }, {
    id: generatedId(),
    name: 'Dell Inspiron',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/7/2019',
    type: 'computer'
  }, {
    id: generatedId(),
    name: 'Dell Flat',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/6/2019',
    type: 'computer'
  }, {
    id: generatedId(),
    name: 'IPhone 6S',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/5/2019',
    type: 'mobile'
  }];

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }

  addProduct(product) {
    this.products = [
      {
        id: generatedId(),
        ...product,
      },
      ...this.products,
    ];
    this.products$.next(this.products);
  }

  editProduct(id, product) {
    const index = this.products.findIndex(p => p.id === id);
    this.products = [
      ...this.products.slice(0, index),
      {
        id,
        ...product,
      },
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }
}

function generatedId() {
  return Math.floor(Math.random() * 1000);
}
