import { Component, OnInit ,PLATFORM_ID, Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import * as Aos from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId:Object,private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Proyecta')
    if(isPlatformBrowser(this.platformId)){
      Aos.init();
    }
  }

}
