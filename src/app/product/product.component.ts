import { ProductsService } from './../products.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onClicked() {
    // this.productClicked.emit();
    this.productsService.deleteProduct(this.productName);
  }
}
