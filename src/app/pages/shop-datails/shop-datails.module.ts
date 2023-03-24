import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopDatailsPageRoutingModule } from './shop-datails-routing.module';

import { ShopDatailsPage } from './shop-datails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopDatailsPageRoutingModule
  ],
  declarations: [ShopDatailsPage]
})
export class ShopDatailsPageModule {}
