import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // document.addEventListener("loaded", function(){
      window.addEventListener('scroll', function() {
        console.log("inside event listener")
          if (window.scrollY > 90) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            // var navbar_height = 0;
            // var navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
          } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
             // remove padding top from body
            // document.body.style.paddingTop = '0';
          } 
      });
    // });
  }

}
