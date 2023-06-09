
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-n',
  templateUrl: './perfil-n.component.html',
  styleUrls: ['./perfil-n.component.css']
})
export class PerfilNComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const changingText = document.getElementById('changing-text');
    const textArray = ['Desarrolladora web!', 'Developer Full Stack Python!'];
    let index = 0;

    setInterval(() => {
      changingText?.classList.add('fade-out');
      setTimeout(() => {
        changingText!.textContent = textArray[index];
        changingText?.classList.remove('fade-out');
        changingText?.classList.add('fade-in');
        setTimeout(() => {
          changingText?.classList.remove('fade-in');
        }, 1000);
        index++;
        if (index === textArray.length) {
          index = 0;
        }
      }, 1000);
    }, 5000);
  }
}
