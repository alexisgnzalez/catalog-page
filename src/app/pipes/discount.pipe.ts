import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number): unknown {
    if (!isNaN(price) && !isNaN(discount)) {
      return price - (price * (discount / 100));
    }
    return 0; // Or you can return a different default value
  }
}
