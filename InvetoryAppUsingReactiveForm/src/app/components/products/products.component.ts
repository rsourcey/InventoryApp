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

    products$: Observable<IProduct[]> = this.productService.products$;
    delete = false;
    productToBeDeleted: IProduct;
    productOpen;
    selectedProduct;

    constructor(
        private productService: ProductService
    ) {
    }

    ngOnInit() {

    }

    onEdit(product) {
        this.productOpen = true;
        this.selectedProduct = product;
    }

    onDelete(product: IProduct): void {
        this.delete = true;
        this.productToBeDeleted = product;
    }

    addProduct() {
        this.productOpen = true;
        this.selectedProduct = undefined;
    }

    handleCancel(e): void {
        this.delete = false;
        this.productOpen = false;
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
