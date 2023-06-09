import { Component, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-botonscroll',
  templateUrl: './botonscroll.component.html',
  styleUrls: ['./botonscroll.component.css']
})
export class BotonscrollComponent {
  isShow!: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
