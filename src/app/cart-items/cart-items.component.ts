import { Component, Input, OnInit, } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})


export class CartItemsComponent implements OnInit {
  @Input() itemName!: string;
  @Input() itemPrice!: number;
  @Input() itemNb!: number;
  @Input() itemTotalPrice!:number;
  @Input() url!: string;
  @Input() itemId!: number;

  constructor(private appService: AppService) {
    
  }

  ngOnInit(): void {
  }

  getCartEmpty(){
    this.appService.getCartEmpty();
  }

  killThisItem(index:number){
    this.appService.killThisItem(index)
  }
}
