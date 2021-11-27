import { Component, OnInit, Input } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit  {
  @Input() id: number;
  @Input() urlThumbnail: string;
  @Input() selected: boolean;

  constructor(private itemCard: ItemCardComponent, private appService: AppService) {
    this.urlThumbnail = "placeholder"
    this.id = 0;
    this.selected = false;
  }

  ngOnInit(): void {
    
  }

  onClick():void {
    this.itemCard.mainImageURL = this.appService.changeMainImage(this.id);
    this.selected = true;
  }
}
