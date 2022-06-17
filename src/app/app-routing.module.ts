import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { TeamGenComponent } from './team-gen/team-gen.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



const routes: Routes=[
   {  path:'home', component:HomeComponent},
   {path:'',component:HomeComponent},
  {path:'teamgen', component:TeamGenComponent}

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
