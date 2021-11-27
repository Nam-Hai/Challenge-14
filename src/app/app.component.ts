import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Animations } from './services/app.animation';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: Animations
})

export class AppComponent implements OnInit {
  title = 'challenge-quatorze';
  nbItemSelected: number = 0;
  profilPanelStatus: boolean;
  profilStateSubscription: Subscription | undefined;

  nbItemsInCartSubscrition: Subscription | undefined;
  nbItemsInCart: number = 0;
  
  itemId: number = this.appService.itemId;
  


  constructor (private appService: AppService) {
    this.profilPanelStatus = false;
    document.documentElement.style.setProperty('--primary', this.theme[0].primary);
    document.documentElement.style.setProperty('--primary-light', this.theme[0].primaryLight);
    document.documentElement.style.setProperty('--primary-dull', this.theme[0].primaryDull);
  }

  ngOnInit(): void {
    this.profilStateSubscription = this.appService.profilStateSubject.subscribe(
      (profilState: boolean) => {
        this.profilPanelStatus = profilState;
      }
    )

    this.nbItemsInCartSubscrition = this.appService.nbItemsInCartSubject.subscribe(
      (nbItemsInCart: number) => {
        this.nbItemsInCart = nbItemsInCart;
      }
    )
    this.itemIdSubscription = this.appService.itemIdSuject.subscribe(
      (itemId:number) => {
        this.itemId = itemId;
      }
    )
  }
  buttonMinus():void {
    if (this.nbItemSelected === 0 ) {
      return;
    }
    this.nbItemSelected = this.nbItemSelected - 1;
  }

  buttonPlus():void {
    this.nbItemSelected = this.nbItemSelected + 1;
  }

  cartPreviewToggle(): void {
    this.appService.cartStateUpdater();
  }

  addToCart(): void {
    this.appService.addToCart(this.nbItemSelected);
    this.nbItemSelected = 0;
  }

  openProfilSidePanel():void {
    if (!this.profilPanelStatus) {
      this.profilPanelStatus = true;
    }
  }

  dropdownState: boolean = false;
  dropdownStateContact: boolean = false;
  blurState:boolean =false;

  openDropdown():void {
    this.dropdownStateContact = false;
    if(this.dropdownState){
      this.dropdownState = false
    } else {
      this.dropdownState = true;
    }  
    this.blurState = this.dropdownState
  }
  openContact():void {
    this.dropdownState = false;
    if(this.dropdownStateContact){
      this.dropdownStateContact = false
    } else {
      this.dropdownStateContact = true;
    } 
    this.blurState = this.dropdownStateContact
  }
  closeDropdown():void {
    this.dropdownState = false;
    this.dropdownStateContact = false;
    this.blurState = false
  }

  //Shoes data from database//
  itemIdSubscription: Subscription |undefined;
  itemData = this.appService.allItems[this.itemId];
  itemName = this.itemData.name;
  itemPrice = this.itemData.price;
  theme = this.itemData.theme;
  itemCompanyName = this.itemData.company;
 
  changeSNKRS(index:number):void {
    this.itemId = index;
    this.appService.changeSNKRS(index);
    this.itemData = this.appService.allItems[this.itemId];
    this.itemName = this.itemData.name;
    this.itemPrice = this.itemData.price;
    this.itemCompanyName = this.itemData.company;
    this.theme = this.itemData.theme;
    this.nbItemSelected = 0;

    document.documentElement.style.setProperty('--primary', this.theme[0].primary);
    document.documentElement.style.setProperty('--primary-light', this.theme[0].primaryLight);
    document.documentElement.style.setProperty('--primary-dull', this.theme[0].primaryDull);
  }



  // mobile Menu toggle // 
  mobileMenuState: boolean = false;
  menuMobileToggle():void {
    if(this.mobileMenuState) {
      this.mobileMenuState = false;
    } else {
      this.mobileMenuState = true;
    }
  }
}
