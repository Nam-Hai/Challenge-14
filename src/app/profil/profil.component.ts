import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Animations } from "../services/app.animation";
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AppService } from '../services/app.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  animations: [Animations,
    trigger('cache2', [
      state(
        'true',
        style({
          height: "0",
        })
      ),

      state(
        'false',
        style({
          height: "15rem",
        })
      ),

      transition('false => true', [
        animate('500ms cubic-bezier(.77,0,.18,1)')
      ]),
      transition('true => false', [
        animate('500ms cubic-bezier(.77,0,.18,1)')
      ]),
    ]),


    trigger('contact', [
      state(
        'true',
        style({
          height: "100vh",
        })
      ),

      state(
        'false',
        style({
          height: "0",
        })
      ),

      transition('* => *', [
        animate('500ms cubic-bezier(.77,0,.18,1)')
      ]),
    ])
  ]
})
export class ProfilComponent implements OnInit{

  portfolio: string[] = ["P","O","R","T",'F','O','L','I','O'];
  titleStarter: boolean = false;
  isOpen: boolean | undefined;

  cache2State = true;
  bgState = false;

  constructor(private appService: AppService, public el: ElementRef<HTMLElement>) {
    document.documentElement.style.setProperty('--bg', "#161616");
  }

  ngOnInit(): void {
    this.isOpen = true;
    setTimeout(
      () => {
        this.titleStarter = true;

    }, 300);
    setTimeout(
      () => {
        this.cache2State = false;

    }, 1100);
    
  }

  closeDisplay(): void {
    this.isOpen = false;
    
    setTimeout(
      () => {
        this.appService.killProfil();
      }, 600);
  }

  ngOnDestroy(){};

  onEnter():void{
    this.cache2State = true;
    this.bgState = true;
    document.documentElement.style.setProperty('--bg', "#14100e");
  }
  onLeave():void{
    this.cache2State = false;
    this.bgState = false;
    document.documentElement.style.setProperty('--bg', "#161616");
  }
  

  contactState: boolean = false;
  contactActionner(){
    this.contactState = !this.contactState;
  }

}
