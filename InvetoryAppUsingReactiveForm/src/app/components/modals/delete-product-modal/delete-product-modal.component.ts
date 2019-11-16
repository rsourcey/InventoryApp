import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductsComponent } from '../../products/products.component';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'in-delete-product-modal',
    templateUrl: 'delete-product-modal.component.html',
    styleUrls: ['delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit {

    @Input() product;
    @Output() cancel = new EventEmitter();
    @Output() confirm = new EventEmitter();

    ngOnInit() {

    }

    cancelDelete() {
        this.cancel.emit(this.product);
    }

    confirmDelete() {
        console.log(this.confirm);
        this.confirm.emit(this.product);
    }
}
