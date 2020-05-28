import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  filterBy = 'Filter by:';
  filteredBy = 'Filtered by:';

  constructor() {
  }

  ngOnInit() {
  }

}
