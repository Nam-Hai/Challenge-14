import { Subject } from "rxjs";

export class AppService {

    

    /** to simulate there is more item possible to add in cart */
    allItems = [
      {
        "id": 0,
        "name" : "placeholder",
        "price" : -1,
        "urlThumbnail": "placeholder",
        "company": "placeholder",
        "theme": [{
          "primary": "black",
          "primaryLight": "black",
          "primaryDull": "black"
        }],
        "allImageUrl": [{
          "id": 0,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": true,
        },
        {
          "id": 1,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": false,
        },
        {
          "id": 2,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": false,
        },
        {
          "id": 3,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": false,
        }]
      },
      {
        "id": 1,
        "name" : "Fall Limited Edition Sneakers",
        "price" : 125,
        "urlThumbnail": "./assets/image-product-1-thumbnail.jpg",
        "company": "SNEAKER COMPANY",
        "theme": [{
          "primary": "hsl(26, 100%, 55%)",
          "primaryLight": "hsl(25, 100%, 94%)",
          "primaryDull": "hsla(26, 100%, 65%)"
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/image-product-1.jpg",
            "urlThumbnail": "./assets/image-product-1-thumbnail.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/image-product-2.jpg",
            "urlThumbnail": "./assets/image-product-2-thumbnail.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/image-product-3.jpg",
            "urlThumbnail": "./assets/image-product-3-thumbnail.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/image-product-4.jpg",
            "urlThumbnail": "./assets/image-product-4-thumbnail.jpg",
            "selected": false,
          }
        ]
      },
      {
        "id": 2,
        "name": "Off Noir and Volt",
        "price": 179,
        "urlThumbnail": "./assets/SNKRS.jpg",
        "company": "NIKE",
        "theme": [{
          "primary": "#00e600",
          "primaryLight": "#e0ffe1",
          "primaryDull": "#5bff5b" 
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/SNKRS.jpg",
            "urlThumbnail": "./assets/SNKRS.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/SNKRS-2.jpg",
            "urlThumbnail": "./assets/SNKRS-2.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/SNKRS-3.jpg",
            "urlThumbnail": "./assets/SNKRS-3.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/SNKRS-4.jpg",
            "urlThumbnail": "./assets/SNKRS-4.jpg",
            "selected": false,
          }
        ]
      },
      {
        "id": 3,
        "name": "Air Huarache LE - Praline/Umber",
        "price": 129,
        "urlThumbnail": "./assets/nike-air-huarache-le-pralineumber.jpg",
        "company": "NIKE",
        "theme": [{
          "primary": "#5b2b51",
          "primaryLight": "#b58bab",
          "primaryDull": "#754972" 
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/nike-air-huarache-le-pralineumber.jpg",
            "urlThumbnail": "./assets/nike-air-huarache-le-pralineumber.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/nike-air-huarache-le-pralineumber-1.jpg",
            "urlThumbnail": "./assets/nike-air-huarache-le-pralineumber-1.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/nike-air-huarache-le-pralineumber-2.jpg",
            "urlThumbnail": "./assets/nike-air-huarache-le-pralineumber-2.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/nike-air-huarache-le-pralineumber-3.jpg",
            "urlThumbnail": "./assets/nike-air-huarache-le-pralineumber-3.jpg",
            "selected": false,
          }
        ]
      },
      {
        "id": 4,
        "name": "AIR JORDAN 11 W ANIMAL INSTINCT",
        "price": 199,
        "urlThumbnail": "./assets/AJ11-animal-instinct.jpg",
        "company": "NIKE",
        "theme": [{
          "primary": "#9d050c",
          "primaryLight": "#ffabb0",
          "primaryDull": "#bb343a" 
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/AJ11-animal-instinct.jpg",
            "urlThumbnail": "./assets/AJ11-animal-instinct.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/AJ11-animal-instinct-1.jpg",
            "urlThumbnail": "./assets/AJ11-animal-instinct-1.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/AJ11-animal-instinct-2.jpg",
            "urlThumbnail": "./assets/AJ11-animal-instinct-2.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/AJ11-animal-instinct-3.jpg",
            "urlThumbnail": "./assets/AJ11-animal-instinct-3.jpg",
            "selected": false,
          }
        ]
      },
      {
        "id": 5,
        "name": "YEEZY BOOST 700 FADE AZURE",
        "price": 240,
        "urlThumbnail": "./assets/GZ2002_01.jpg",
        "company": "ADIDAS",
        "theme": [{
          "primary": "#72cfc8",
          "primaryLight": "#bef3ef",
          "primaryDull": "#0f998d" 
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/GZ2002_01.jpg",
            "urlThumbnail": "./assets/GZ2002_01.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/GZ2002_02.jpg",
            "urlThumbnail": "./assets/GZ2002_02.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/GZ2002_03.jpg",
            "urlThumbnail": "./assets/GZ2002_03.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/GZ2002_04.jpg",
            "urlThumbnail": "./assets/GZ2002_04.jpg",
            "selected": false,
          }
        ]
      },
      {
        "id": 6,
        "name": "X SPEEDFLOW+ AG",
        "price": 280,
        "urlThumbnail": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_01.jpg",
        "company": "ADIDAS",
        "theme": [{
          "primary": "#d43a35",
          "primaryLight": "#fba0a1",
          "primaryDull": "#d46ca3" 
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_01.jpg",
            "urlThumbnail": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_01.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_02.jpg",
            "urlThumbnail": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_02.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_03.jpg",
            "urlThumbnail": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_03.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_04.jpg",
            "urlThumbnail": "./assets/X_SPEEDFLOW_AG_Blanc_FY6873_04.jpg",
            "selected": false,
          }
        ]
      },
      {
        "id": 7,
        "name": "OZELIA",
        "price": 110,
        "urlThumbnail": "./assets/Chaussure_Ozelia_Blanc_GY6194_01.jpg",
        "company": "ADIDAS",
        "theme": [{
          "primary": "#ebab88",
          "primaryLight": "#fff3ec",
          "primaryDull": "#bd927a" 
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/Chaussure_Ozelia_Blanc_GY6194_01.jpg",
            "urlThumbnail": "./assets/Chaussure_Ozelia_Blanc_GY6194_01.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/Chaussure_Ozelia_Blanc_GY6194_02.jpg",
            "urlThumbnail": "./assets/Chaussure_Ozelia_Blanc_GY6194_02.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/Chaussure_Ozelia_Blanc_GY6194_03.jpg",
            "urlThumbnail": "./assets/Chaussure_Ozelia_Blanc_GY6194_03.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/Chaussure_Ozelia_Blanc_GY6194_04.jpg",
            "urlThumbnail": "./assets/Chaussure_Ozelia_Blanc_GY6194_04.jpg",
            "selected": false,
          }
        ]
      },
      {
        "id": 8,
        "name": "HARDEN VOL. 5 FUTURENATURAL",
        "price": 112,
        "urlThumbnail": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_01.jpg",
        "company": "ADIDAS",
        "theme": [{
          "primary": "#d91c2e",
          "primaryLight": "#f9eab0",
          "primaryDull": "#8499bf" 
        }],
        "allImageUrl": [
          {
            "id": 0,
            "url": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_01.jpg",
            "urlThumbnail": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_01.jpg",
            "selected": true,
          },
          {
            "id": 1,
            "url": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_02.jpg",
            "urlThumbnail": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_02.jpg",
            "selected": false,
          },
          {
            "id": 2,
            "url": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_03.jpg",
            "urlThumbnail": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_03.jpg",
            "selected": false,
          },
          {
            "id": 3,
            "url": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_04.jpg",
            "urlThumbnail": "./assets/Chaussure_Harden_Vol._5_Futurenatural_Blanc_GY7489_04.jpg",
            "selected": false,
          }
        ]
      },
      
    ];
    curCartJSON = [
      {
        "id": 0,
        "name" : "placeholder",
        "price" : -1,
        "urlThumbnail": "placeholder",
        "company": "placeholder",
        "theme": [{
          "primary": "black",
          "primaryLight": "black",
          "primaryDull": "black"
        }],
        "numberSelected": -1,
        "allImageUrl": [{
          "id": 0,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": true,
        },
        {
          "id": 1,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": false,
        },
        {
          "id": 2,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": false,
        },
        {
          "id": 3,
          "url": "placeholder",
          "urlThumbnail": "placeholder",
          "selected": false,
        }]
      }
    ];
    cartJSONSubject = new Subject<any>();
    itemId = 1;
    itemIdSuject = new Subject<number>();

    cartStateSubject = new Subject<boolean>();
    CartState: boolean = false;
    emptyCartSubject = new Subject<boolean>();
    emptyCart: boolean = true;
    nbItemsInCart: number = 0;
    thisItemNbInCart: number = 0;
    nbItemsInCartSubject = new Subject<number>();
    isEmpty: boolean = true;

    emitAppareilSubject() {
      this.cartStateSubject.next(this.CartState);
    }
    cartStateUpdater(): void {
      if (!this.CartState) {
        this.CartState = true
      } else {
        this.CartState = false
      }
      this.cartStateSubject.next(this.CartState);
    }

    addToCart(nbToAdd: number){
      this.nbItemsInCart = this.nbItemsInCart + nbToAdd;
      this.thisItemNbInCart = this.thisItemNbInCart + nbToAdd;
      if(this.nbItemsInCart != 0) {
        this.emptyCart = false;
        this.emptyCartSubject.next(this.emptyCart);
        
        let isInCart = false;
        this.curCartJSON.forEach(currentItem => {
          if (currentItem.id == this.itemId){
            isInCart = true;
            currentItem.numberSelected = this.thisItemNbInCart;
          }
        });

        if(!isInCart) {
          this.curCartJSON.push(Object.assign(this.allItems[this.itemId],{"numberSelected": this.thisItemNbInCart}));
        };
        this.cartJSONSubject.next(this.curCartJSON);
      }
      this.nbItemsInCartSubject.next(this.nbItemsInCart);
      
    }

    getCartEmpty(): void{
      this.curCartJSON = [
        {
          "id": 0,
          "name" : "placeholder",
          "price" : -1,
          "urlThumbnail": "placeholder",
          "company": "placeholder",
          "theme": [{
            "primary": "black",
            "primaryLight": "black",
            "primaryDull": "black"
          }],
          "numberSelected": -1,
          "allImageUrl": [{
            "id": 0,
            "url": "placeholder",
            "urlThumbnail": "placeholder",
            "selected": true,
          },
          {
            "id": 1,
            "url": "placeholder",
            "urlThumbnail": "placeholder",
            "selected": false,
          },
          {
            "id": 2,
            "url": "placeholder",
            "urlThumbnail": "placeholder",
            "selected": false,
          },
          {
            "id": 3,
            "url": "placeholder",
            "urlThumbnail": "placeholder",
            "selected": false,
          }]
        }
      ];
      this.isEmpty = true;
      this.emptyCart = true;
      this.nbItemsInCart = 0;
      this.thisItemNbInCart =0;
      this.nbItemsInCartSubject.next(this.nbItemsInCart);
      this.cartJSONSubject.next(this.curCartJSON);
      this.emptyCartSubject.next(this.emptyCart);
    }

    killThisItem(itemId:number):void {
      let index = 0
      this.curCartJSON.forEach(element => {
        
        if(element.id == itemId) {
          this.nbItemsInCart = this.nbItemsInCart - element.numberSelected;
          let copyCart = this.curCartJSON;
          copyCart = copyCart.slice(0,index)
          let copyCart2 = this.curCartJSON;
          copyCart2 = copyCart2.slice(index + 1, this.curCartJSON.length);
          this.thisItemNbInCart = 0;
          this.curCartJSON = copyCart.concat(copyCart2);
          this.cartJSONSubject.next(this.curCartJSON);
          this.nbItemsInCartSubject.next(this.nbItemsInCart);
        }
        index = index + 1;
      });
      if(this.curCartJSON.length == 1) {
        this.isEmpty = true;
        this.emptyCart = true;
        this.nbItemsInCart = 0;
        this.thisItemNbInCart = 0;
        this.nbItemsInCartSubject.next(this.nbItemsInCart);
        this.cartJSONSubject.next(this.curCartJSON);
        this.emptyCartSubject.next(this.emptyCart);
      }
    }

    profilState: boolean = false;
    profilStateSubject= new Subject<boolean>();
    
    killProfil(): void {
      this.profilState = false;
      this.profilStateSubject.next(this.profilState);
    }

    currentImageIndex: number = 0;

    changeMainImage(index: number):string {
      
      this.allItems[this.itemId].allImageUrl.forEach(element => {
        element.selected = false;
      });

      this.currentImageIndex = index;
      this.allItems[this.itemId].allImageUrl[index].selected = true;
      return this.allItems[this.itemId].allImageUrl[index].url;
  }

  changeSNKRS(index:number):void {
    this.itemId = index;
    this.itemIdSuject.next(this.itemId);
    if(this.nbItemsInCart != 0) {
      let isThisItemInCart = false;
      this.curCartJSON.forEach(element => {
        if(element.id == this.itemId) {
          this.thisItemNbInCart = element.numberSelected;
        }
      });
      if(!isThisItemInCart){
        this.thisItemNbInCart = 0;
      }
    }
  }
}