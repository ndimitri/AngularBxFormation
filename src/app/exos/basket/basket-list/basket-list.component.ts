import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/models/product';
import {MovementType} from '../../../shared/enum/MovementType';
import {ProductMovementType} from '../../../shared/models/ProductMovementType';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrl: './basket-list.component.scss'
})
export class BasketListComponent {
  //pour utliser l'enum dans le html
  protected readonly MovementType = MovementType;

  @Input({required: true})
  products! : Product[];

  @Output()
  private onResponse : EventEmitter<ProductMovementType> = new EventEmitter<ProductMovementType>();

  moveProduct(product: Product, movementType: MovementType) {
    let productMovementType : ProductMovementType= {
      product: product,
      movementType: movementType
    };
    this.onResponse.emit(productMovementType);
  }


}
