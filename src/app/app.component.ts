import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'testbxslider';

  // ngOnInit() {
  //   $(document).ready(function() {
  //     $('.bxslider').bxSlider({
  //       auto:true
  //     });
  // });
  // }
  ngAfterViewInit() {
    $(document).ready(function(){
      $('.bxslider').bxSlider({
        slideWidth:450,
        auto: true
      }
       
      );
    });
  }
}
