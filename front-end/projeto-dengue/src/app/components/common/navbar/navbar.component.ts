import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleAgente = false;

  constructor() { }

  ngOnInit(): void {

  }

  alterarAgente() {
    if (this.toggleAgente === true) {
      this.toggleAgente = false
     } else {
        this.toggleAgente = true
    }
  }
}
