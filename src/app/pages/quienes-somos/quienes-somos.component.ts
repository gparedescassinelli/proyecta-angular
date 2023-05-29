import { Component, OnInit,PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import * as Aos from 'aos';
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  constructor(private title:Title,@Inject(PLATFORM_ID) private platformId:Object) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      Aos.init();
    }
  this.title.setTitle('Quienes somos')
  }

}
