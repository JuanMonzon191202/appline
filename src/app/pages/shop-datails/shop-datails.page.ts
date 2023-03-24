import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-shop-datails',
  templateUrl: './shop-datails.page.html',
  styleUrls: ['./shop-datails.page.scss'],
})
export class ShopDatailsPage implements OnInit {
  // products: any[] = [];

  titulo = null;
  imagen = null;
  categoria = null;
  price = null;
  description = null;
  id = null;
  cart: any[] = [];
  product: any;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      console.error('No se proporcionó un ID de tienda en la URL');
      return;
    }

    this.shopService.getShopDetails(id).subscribe((res: any) => {
      console.log(res);

      this.titulo = res.title;
      this.imagen = res.image;
      this.categoria = res.category;
      this.price = res.price;
      this.description = res.description;
      this.id = res.id;
      this.product = res;
      console.log(this.product);
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Producto agregado al carrito');
  }
}
