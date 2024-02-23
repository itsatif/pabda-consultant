import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {CareersComponent} from './careers/careers.component';
import {ClientWeServeComponent} from './client-we-serve/client-we-serve.component';
import {SpeakToAnExpertComponent} from './speak-to-an-expert/speak-to-an-expert.component';
import {ContactUsFormComponent} from './contact-us-form/contact-us-form.component';
import {JoinOurPanelComponent} from './join-our-panel/join-our-panel.component';
import {SurveyParticipantsComponent} from './survey-participants/survey-participants.component';
import {DownloadablesComponent} from './downloadables/downloadables.component';
import {CatiComponent} from './cati/cati.component';
import {UpcomingEventsComponent} from './upcoming-events/upcoming-events.component';
import {ServiceDetailComponent} from './service-detail/service-detail.component';
import {DataProcessingComponent} from './data-processing/data-processing.component';
import {ServiceListingComponent} from './service-listing/service-listing.component';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'client-we-serve', component: ClientWeServeComponent},
  {path: 'speak-to-an-expert', component: SpeakToAnExpertComponent},
  {path: 'contact-us', component: ContactUsFormComponent},
  {path: 'join-our-panel', component: JoinOurPanelComponent},
  {path: 'survey-participants', component: SurveyParticipantsComponent},
  {path: 'downloadables', component: DownloadablesComponent},
  {path: 'cati', component: CatiComponent},
  {path: 'upcoming-events', component: UpcomingEventsComponent},
  {path: 'service-details', component: ServiceDetailComponent},
  {path: 'service-details/:slug', component: DataProcessingComponent},
  {path: 'service-listing', component: ServiceListingComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blogs/:blogTitle', component: BlogDetailsComponent},
];
