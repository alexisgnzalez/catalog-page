import { Component, computed, input } from '@angular/core';
import { Product, ProductFormatted } from '../../interfaces/product';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, DiscountPipe, NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product = input.required<ProductFormatted>();
  discount = computed(() => {
    return this.product().REAL - (this.product().REAL * (this.product().Discount / 100))
  })
}
