import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[MatSlideToggleModule],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  toggleMenu(){
    console.log("toggleMenu Click");
  }
}

