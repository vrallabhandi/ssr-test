import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomeComponent } from './home/home.component';
import { SampleModule } from './sample/sample.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  {
    path: 'sample',
    loadChildren: () =>
      import('./sample/sample.module').then((m) => m.SampleModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
    ContactUsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
