import {Component} from '@angular/core';
import {Product} from '../../shared/models/product';
import {MovementType} from '../../shared/enum/MovementType';
import {ProductMovementType} from '../../shared/models/ProductMovementType';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
products : Product[] = [
  {
    id : 1,
    name : 'Pc portable',
    price: 200,
    quantity : 1
  },
  {
    id : 2,
    name : 'Chaise',
    price: 15,
    quantity : 3
  },
  {
    id : 3,
    name : 'Plante magique',
    price: 10,
    quantity : 5
  },
  {
    id : 4,
    name : 'Patate',
    quantity : 3
  },
]
  newProductName: string ='' ;
  newProductQuantity: number = 0;


  moveProduct(productMovementType: ProductMovementType) {
    switch (productMovementType.movementType) {
      case MovementType.ADD:
        this.addProduct(productMovementType.product);
        break;
      case MovementType.REMOVE:
        this.removeProduct(productMovementType.product);
        break;
      case MovementType.DELETE:
        this.deleteProduct(productMovementType.product);
        break;
    }
  }

  addProduct(product: Product) : void {
    product.quantity++;
  }

  removeProduct(product: Product) : void {
    if(product.quantity === 0){
      this.deleteProduct(product);
    }
    else{
      product.quantity--;
    }

  }

  deleteProduct(product: Product) : void {
    this.products.splice(this.products.indexOf(product), 1);
  }

  addNewProduct() {
    if (this.newProductName && this.newProductQuantity > 0) {

      //Regarde si le produit existe déja
      let findedProduct = this.products.find(p => p.name === this.newProductName)
      //Si oui, on incrémente la quantity
      if(findedProduct){
        findedProduct.quantity += this.newProductQuantity;
      }
      //Ou alors on crée le product
      else{
        const newProduct: Product = {
          id: this.products.length + 1, // Simple auto-incrémentation de l'ID
          name: this.newProductName,
          price: 0, // ou un prix par défaut si besoin
          quantity: this.newProductQuantity
        };
        this.products.push(newProduct);

        // Réinitialiser les champs du formulaire après ajout
        this.newProductName = '';
        this.newProductQuantity = 1;
      }


    }
  }




}
