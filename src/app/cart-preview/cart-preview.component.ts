import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppService } from '../services/app.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss'],
  animations: [
    trigger('testClic', [

      state(
        'false',
        style({
          visibility: 'hidden',
          opacity: 0,
          transform: 'translateY(-30%)'
        })
      ),

      state(
        'true',
        style({
          visibility: 'unset',
          opacity: 1,
          transform: 'translateY(0)'
        })
      ),

      transition('false => true', [
        animate('250ms ease-out')
      ]),
      transition('true => false', [
        animate('100ms ease-out', style({
          transform: 'translateY(20%)',
          opacity: 0
        }))
      ]),

    ])
  ]
})
export class CartPreviewComponent implements OnInit {
  cartSubscription: Subscription | undefined;
  cartState: boolean = false;
  isEmptySubscription: Subscription | undefined;
  isEmpty: boolean;
  nbOfItem: number;
  
  curCartJSONSubscription: Subscription | undefined;
  curCartJSON = [{
    "id": 0,
    "name": "placeholder",
    "price": -1,
    "urlThumbnail": "placeholder",
    "company": "placeholder",
    "theme": [{
      "primary": "black",
      "primaryLight": "black",
      "primaryDull": "black"
    }],
    "numberSelected": -1
  }];

  constructor(private appService: AppService) {
    this.nbOfItem = 0;
    this.isEmpty = true;
  }

  ngOnInit(): void {
    this.cartSubscription = this.appService.cartStateSubject.subscribe(
      (cartState: boolean) => {
        this.cartState = cartState;  
      }
    );
    this.isEmptySubscription = this.appService.emptyCartSubject.subscribe(
      (isEmpty: boolean) => {
        this.isEmpty = isEmpty;
      }
    );
    

    this.curCartJSONSubscription = this.appService.cartJSONSubject.subscribe(
      (curCartJSON: any) => {
        this.curCartJSON = curCartJSON;
      }
    )
    this.appService.emitAppareilSubject();
  }

  getCartEmpty(): void{
    this.appService.getCartEmpty();
  }

  closeCartPreview():void {
    this.appService.cartStateUpdater();
  }
}

