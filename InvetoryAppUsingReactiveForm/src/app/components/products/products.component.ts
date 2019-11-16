import { ProductService } from './../../product.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product';

@Component({
    selector: 'in-products',
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

    products$: Observable<IProduct[]> = this.productService.product$;
    delete = false;
    productToBeDeleted: IProduct;

    constructor(
        private productService: ProductService
    ) {
    }

    ngOnInit() {

    }

    onDelete(product: IProduct): void {
        this.delete = true;
        this.productToBeDeleted = product;
    }

    handleCancel(e): void {
        this.delete = false;
    }

    handleDelete(e): void {
        this.productService.removeProduct(this.productToBeDeleted);
        this.handleCancel(e);
        console.log('asdasd');
    }

    trackById(index: any, item: any) {
        return item.id;
    }
}
