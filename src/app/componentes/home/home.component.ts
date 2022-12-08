import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img1 = '../assets/gym1.jpg'
  img2 = '../assets/gym2.jpg'
  img3 = '../assets/gym3.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
