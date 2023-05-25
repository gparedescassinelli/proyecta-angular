import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
//externos
//componentes
import { NavbarComponent } from './navbar/navbar.component'
import { HeroComponent } from './hero/hero.component'
import { SectionRequestComponent } from './section-request/section-request.component'
import { SectionTeamComponent } from './section-team/section-team.component'
import { SectionContactComponent } from './section-contact/section-contact.component'
import { SectionFeaturedProjectsComponent } from './section-featured-projects/section-featured-projects.component'
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InspiringComponent } from './inspiring/inspiring.component';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';
import { ShowroomComponent } from './showroom/showroom.component'

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    SectionRequestComponent,
    SectionTeamComponent,
    SectionContactComponent,
    SectionFeaturedProjectsComponent,
    FooterComponent,
    StartComponent,
    AboutUsComponent,
    InspiringComponent,
    VisionMisionComponent,
    ShowroomComponent,
  ],
  imports: [CommonModule,SwiperModule,RouterModule],
  exports: [
    NavbarComponent,
    HeroComponent,
    SectionRequestComponent,
    SectionTeamComponent,
    SectionContactComponent,
    SectionFeaturedProjectsComponent,
    FooterComponent,
    StartComponent,
    AboutUsComponent,
    InspiringComponent,
    VisionMisionComponent,
    ShowroomComponent,
  ],
})
export class ComponentsModule {}
