import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { AppService } from './services/app.service';
import { CartPreviewComponent } from './cart-preview/cart-preview.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ThumbnailComponent,
    CartPreviewComponent,
    CartItemsComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
