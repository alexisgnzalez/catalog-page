import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../../components/product/product.component';
import { HttpCaller } from '../../services/http-caller.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  private httpCaller = inject(HttpCaller);
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get('http://localhost:5000').subscribe(products => {
      //@ts-ignore
      this.products = products;
    })
  }
}
