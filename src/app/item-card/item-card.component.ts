import { Component, ElementRef, HostListener, NgModule, OnInit, Renderer2 } from '@angular/core';

import { Subscription } from 'rxjs';
import { Animations } from '../services/app.animation';
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  animations: Animations
})


export class ItemCardComponent implements OnInit {
  isClicked = false;
  
  modalState: boolean = false;
  imageJSON = this.appService.allItems[this.appService.itemId].allImageUrl;
  mainImageURL :string = this.imageJSON[0].url;
  index = 0;

  itemId: number;
  itemIdSubscription: Subscription |undefined;
  getScreenWidth: number | undefined;
  getScreenHeight: number | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2, private appService: AppService) { 
    this.itemId = this.appService.itemId
    this.imageJSON = this.appService.allItems[this.itemId].allImageUrl;
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if(this.getScreenWidth <= 850) {
      this.mobileState = true
    } else {
      this.mobileState = false;
    }

    this.itemIdSubscription = this.appService.itemIdSuject.subscribe(
      (itemId:number) => {
        this.itemId = itemId;
        this.imageJSON = this.appService.allItems[this.itemId].allImageUrl;
        this.mainImageURL = this.imageJSON[this.index].url;
      }
    )
  }

  
  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent): void  {
    const vitesse = 0.15;
    const textScoller = this.el.nativeElement.querySelector('.text-scroller-container');
    this.renderer.setStyle(textScoller, 'transform', "translate("+ -event.clientX*vitesse*0.5 + "px," + -event.clientY*vitesse+"px)")
  }
  
  modalToggle():void {
    if(this.modalState) {
      this.modalState = false;
    } else {
      this.modalState = true;
    }
  }

  selectImage(index: number) {
    this.imageJSON.forEach(element => {
      element.selected = false;
    });
    this.imageJSON[index].selected = true;
  }

  nextImage(): void {
    this.index = this.appService.currentImageIndex;
    if(this.index < 3){
      this.appService.currentImageIndex = this.index + 1
      this.index = this.appService.currentImageIndex;
      this.mainImageURL = this.imageJSON[this.index].url;
      this.selectImage(this.index);
    } else {
      this.appService.currentImageIndex = 0;
      this.index = 0;
      this.mainImageURL = this.imageJSON[this.index].url;
      this.selectImage(this.index);
    }
  }

  previousImage(): void {
    this.index = this.appService.currentImageIndex;
    if(this.index > 0){
      this.appService.currentImageIndex = this.index - 1
      this.index = this.appService.currentImageIndex;
      this.mainImageURL = this.imageJSON[this.index].url;
      this.selectImage(this.index);
    } else {
      this.appService.currentImageIndex = 3;
      this.index = 3;
      this.mainImageURL = this.imageJSON[this.index].url;
      this.selectImage(this.index);
    }
  }

  mobileState = false;
  @HostListener('window:resize', ['$event'])

  onWindowResize(e:any) {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    
    if(this.getScreenWidth <= 850) {   
      this.mobileState = true
    } else {
      this.mobileState = false;
    }
  }
}


