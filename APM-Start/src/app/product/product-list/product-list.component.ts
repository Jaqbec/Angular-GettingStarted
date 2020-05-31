import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

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
  products: Product[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

  ngOnInit() {
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
}
