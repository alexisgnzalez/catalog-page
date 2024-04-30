import { Component, OnInit, Signal, inject, signal } from '@angular/core';
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
  products = signal<Product[]>([]);
  private httpCaller = inject(HttpCaller);

  ngOnInit() {
    this.httpCaller.getProducts().subscribe(products => {
      this.products.set(products);
    /*products.forEach(product => {
        setInterval(() => {
          this.products.set([...this.products(), product]);
        }, 1000);
      }) */
    })
  }

  effect() {
    console.log(this.products());
  }

  
}
