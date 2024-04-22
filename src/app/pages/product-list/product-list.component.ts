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
      console.log(products);
      this.products.set(products);
    })
  }

  getEmptyProduct() {
    let products: Product[] = [];
    let product: Product = {
      ID: 'string',
      Nombre: 'string',
      PrecioTotalAlCosto: 'string',
      Cantidad: 'string',
      PrecioUnitarioAlCosto: 'string',
      PrecioConEnvioUNITARIO: 'string',
      PrecioConEnvioTOTAL: 'string',
      PrecioSugerido: 'string',
      EscalaDePrecio: 'string',
      PrecioSegunPesoVolumen: 'string',
      MiPrecio: 'string',
      VentasAprox: 'string',
      Link: 'string',
      REAL : 'string',
      Vendidos: 'string',
      Disponible: 'string',
      SellRate: 'string',
      image: 'string'
    }
    for (let i = 0; i < 10; i++) {
      products.push(product);
    }
  }
}
