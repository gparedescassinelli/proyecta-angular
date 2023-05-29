import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnInit ,ViewEncapsulation,PLATFORM_ID, Inject} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-section-featured-projects',
  templateUrl: './section-featured-projects.component.html',
  styleUrls: ['./section-featured-projects.component.css'],
  encapsulation:ViewEncapsulation.None,
})

export class SectionFeaturedProjectsComponent implements OnInit,AfterViewInit {

  slidesPerView: number | "auto" | undefined;
  spaceBetween: number | undefined;
  constructor(@Inject(PLATFORM_ID) private platformId:Object) { }

  ngOnInit(): void {
   /*  this.setSlidesPerView(); */
  if(isPlatformBrowser(this.platformId)){
    const screenWidth = window.innerWidth;

    if (screenWidth < 750) {
      this.slidesPerView = 1;
      this.spaceBetween = 10;
    }else if (screenWidth < 1400) {
      this.slidesPerView = 2;
      this.spaceBetween = 20
    } else if (screenWidth < 992) {
      this.slidesPerView = 2;
      this.spaceBetween = 20
    } else {
      this.slidesPerView = 3;
      this.spaceBetween = 30
    }
  }
  }
  /* setSlidesPerView(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      this.slidesPerView = 1;
      this.spaceBetween = 10;
    } else if (screenWidth < 992) {
      this.slidesPerView = 2;
      this.spaceBetween = 20
    } else {
      this.slidesPerView = 3;
      this.spaceBetween = 30
    }
  }
 */

  ngAfterViewInit(): void {

  }

}
