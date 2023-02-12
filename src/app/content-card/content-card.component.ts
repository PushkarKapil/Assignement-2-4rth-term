import { Component,Input , OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() contentItem?: Content;
  constructor() { }
  showID(){
    console.log("ID :"+ this.contentItem?.id + "Title :" + this.contentItem?.title)
    }

    ngOnInit(): void {
    }
  
  }
