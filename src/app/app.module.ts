
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';
// ---------------------------- //
import { EventsService } from './services/events.service';
// ----------------------------//
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurstoryComponent } from './components/pages/ourstory/ourstory.component';
import { ProgramsComponent } from './components/pages/programs/programs.component';
import { NeedimpactComponent } from './components/pages/needimpact/needimpact.component';
import { GetinvolvedComponent } from './components/pages/getinvolved/getinvolved.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DonateComponent } from './components/pages/donate/donate.component';
import { ApproachComponent } from './components/pages/subpages/approach/approach.component';
import { ChildrenComponent } from './components/pages/subpages/children/children.component';
import { HistoryComponent } from './components/pages/subpages/history/history.component';
import { ImpactdetailsComponent } from './components/pages/subpages/impactdetails/impactdetails.component';
import { Team1Component } from './components/pages/subpages/team1/team1.component';
import { TeamComponent } from './components/pages/subpages/team/team.component';
import { ThankyouComponent } from './components/pages/subpages/thankyou/thankyou.component';
import { VisitprogramComponent } from './components/pages/subpages/visitprogram/visitprogram.component';
import { VolunteerComponent } from './components/pages/subpages/volunteer/volunteer.component';
import { WishlistComponent } from './components/pages/subpages/wishlist/wishlist.component';
import { WsuCsComponent } from './components/pages/subpages/wsu-cs/wsu-cs.component';
import { CampComponent } from './components/pages/subpages/programs/camp/camp.component';
import { CommunityComponent } from './components/pages/subpages/programs/community/community.component';
import { HfaComponent } from './components/pages/subpages/programs/hfa/hfa.component';
import { McnComponent } from './components/pages/subpages/programs/mcn/mcn.component';
import { MomsComponent } from './components/pages/subpages/programs/moms/moms.component';
import { RidingComponent } from './components/pages/subpages/programs/riding/riding.component';
import { SwimComponent } from './components/pages/subpages/programs/swim/swim.component';
import { XmasComponent } from './components/pages/subpages/programs/xmas/xmas.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminnavComponent } from './components/admin/adminnav/adminnav.component';
import { StaffService } from './services/staff.service';
import { ProgramsService } from './services/programs.service';
import { ProgramViewComponent } from './components/pages/subpages/program-view/program-view.component';
import { EventViewComponent } from './components/pages/subpages/event-view/event-view.component';
import { AllEventsComponent } from './components/pages/subpages/all-events/all-events.component';




const appRoutes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'howWeWork', component: OurstoryComponent},
   {path: 'joinUs', component: GetinvolvedComponent},
   {path: 'whyWeServe', component: NeedimpactComponent},
   {path: 'ourStory/approach', component: ApproachComponent},
   {path: 'ourStory/history', component: HistoryComponent},
   {path: 'ourStory/team', component: TeamComponent},
   {path: 'ourStory', component: OurstoryComponent},
   {path: 'event-view/:id', component: EventViewComponent},


   {path: 'impact/children', component: ChildrenComponent},
   {path: 'impact/impact_details', component: ImpactdetailsComponent},
   {path: 'impact', component: NeedimpactComponent},

   {path: 'helpUs/donate/thankyou', component: ThankyouComponent},
   {path: 'helpUs/donate', component: DonateComponent},
   {path: 'helpUs/volunteer', component: VolunteerComponent},
   {path: 'helpUs/wishlist', component: WishlistComponent},
   {path: 'helpUs/thankyou/wsu-cs', component: WsuCsComponent},
   {path: 'helpUs/thankyou/donate', component: DonateComponent},
   {path: 'helpUs/thankyou', component: ThankyouComponent},
   {path: 'helpUs', component: GetinvolvedComponent},
   {path: 'all-events/event-view/:id', component: EventViewComponent},
   {path: 'all-events', component: AllEventsComponent},

   {path: 'contact', component: ContactComponent},
   {path: 'donate/thankyou', component: ThankyouComponent},
   {path: 'donate', component: DonateComponent},
   {path: 'programs/program-view/:id', component: ProgramViewComponent},
   {path: 'programs/camp/contact', component: ContactComponent},
   {path: 'programs/camp' , component: CampComponent},
   {path: 'programs/hfa/contact', component: ContactComponent},
   {path: 'programs/hfa' , component: HfaComponent},
   {path: 'programs/mcn' , component: McnComponent},
   {path: 'programs/moms' , component: MomsComponent},
   {path: 'programs/riding' , component: RidingComponent},
   {path: 'programs/swim' , component: SwimComponent},
   {path: 'programs/xmas' , component: XmasComponent},
   {path: 'programs/community' , component: CommunityComponent},
   {path: 'programs', component: ProgramsComponent},
 ];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    OurstoryComponent,
    ProgramsComponent,
    NeedimpactComponent,
    GetinvolvedComponent,
    ContactComponent,
    DonateComponent,
    ApproachComponent,
    ChildrenComponent,
    HistoryComponent,
    ImpactdetailsComponent,
    Team1Component,
    TeamComponent,
    ThankyouComponent,
    VisitprogramComponent,
    VolunteerComponent,
    WishlistComponent,
    WsuCsComponent,
    CampComponent,
    CommunityComponent,
    HfaComponent,
    McnComponent,
    MomsComponent,
    RidingComponent,
    SwimComponent,
    XmasComponent,
    TickerComponent,
    DashboardComponent,
    AdminnavComponent,
    ProgramViewComponent,
    EventViewComponent,
    AllEventsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'WKO'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [
    EventsService,
    AngularFireDatabaseModule,
    AngularFireDatabase,
    StaffService,
    ProgramsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
