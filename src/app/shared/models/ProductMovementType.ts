import {Product} from './product';
import {MovementType} from '../enum/MovementType';

export interface ProductMovementType {
  product: Product;
  movementType: MovementType;
}
