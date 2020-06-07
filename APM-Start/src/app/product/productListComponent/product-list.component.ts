import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../../shared/productService/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  filterBy = 'Filter by:';
  filteredBy = 'Filtered by:';
  showImageBtn = 'Show image';
  hideImageBtn = 'Hide image';
  productHeader = 'Product';
  codeHeader = 'Code';
  availabilityHeader = 'Available';
  priceHeader = 'Price';
  ratingHeader = 'Rating';
  imageWidth = 50;
  imageMargin = 2;
  imagesOn = false;
  private _listFilter: string;
  filteredProducts: Product[];
  products: Product[];

  constructor(private productService: ProductService) {
    this.filteredProducts = this.products;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.imagesOn = !this.imagesOn;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  private performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products
      .filter((product: Product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = this.pageTitle + message;
  }
}
