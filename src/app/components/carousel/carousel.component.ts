import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import M from 'materialize-css';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, AfterViewInit {
  options = { fullWidth: false };
  items = ["https://picsum.photos/200/300?image=0", "https://picsum.photos/200/300?image=1", "https://picsum.photos/200/300?image=2", "https://picsum.photos/200/300?image=3", "https://picsum.photos/200/300?image=4"]

  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // ERROR
    // Error: Cannot read property 'clientWidth' of undefined
    // let elems = document.querySelectorAll('.carousel');
    // let instances = M.Carousel.init(elems, this.options);
  }

  ngAfterViewInit() {
    // no errors
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);
  }
}
