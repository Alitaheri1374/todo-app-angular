import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[MatSlideToggleModule],
})
export class HeaderComponent implements OnInit {
  name;
  id;
  isToggle;

  constructor() {
     this.name= "Ali Taheri 0120";
     this.id= "elementId";
     this.isToggle= false;
  }

  ngOnInit(): void { }

  toggleMenu(){
    this.isToggle=true;
    this.name="yes that right";
    console.log(this.id);
    console.log("toggleMenu Click");
  }

  nameFun(){
    return this.isToggle?this.name:`hello ${this.name}`;
  }

  mouseHandller(e:MouseEvent){
    alert(`${e.detail.valueOf}`)
  }

}

