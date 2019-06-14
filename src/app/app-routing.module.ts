import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
	//{path: 'homepage', component: HomepageComponent},
	{ path: 'homepage', component: HomepageComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '', component: LandingpageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
