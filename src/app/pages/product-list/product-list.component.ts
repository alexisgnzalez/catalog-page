import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { ProductFormatted } from '../../interfaces/product';
import { ProductComponent } from '../../components/product/product.component';
import { HttpCaller } from '../../services/http-caller.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products = signal<ProductFormatted[]>([]);
  private httpCaller = inject(HttpCaller);

  ngOnInit() {
    this.httpCaller.getProducts().subscribe(products => {
      const productsFormatted = products.map(product => {
        return {
          ...product,               
          PrecioTotalAlCosto: Number(product.PrecioTotalAlCosto),
          Cantidad: Number(product.Cantidad),
          PrecioUnitarioAlCosto: Number(product.PrecioUnitarioAlCosto),
          PrecioConEnvioUNITARIO: Number(product.PrecioConEnvioUNITARIO),
          PrecioConEnvioTOTAL: Number(product.PrecioConEnvioTOTAL),
          PrecioSugerido: Number(product.PrecioSugerido),            
          PrecioSegunPesoVolumen: Number(product.PrecioSegunPesoVolumen),
          MiPrecio: Number(product.MiPrecio),
          VentasAprox: Number(product.VentasAprox),            
          REAL: Number(product.REAL),
          Vendidos: Number(product.Vendidos),
          Disponible: Number(product.Disponible),
          SellRate: Number(product.SellRate),            
          Discount: Number(product.Discount)
      }})
      this.products.set(productsFormatted);
    })
  }

  effect() {
    console.log(this.products());
  }
}