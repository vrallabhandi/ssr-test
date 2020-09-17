import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: SampleComponent,
  },
];

@NgModule({
  declarations: [SampleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SampleModule {}
