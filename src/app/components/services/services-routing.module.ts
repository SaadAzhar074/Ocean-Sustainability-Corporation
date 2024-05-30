import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeAllComponent } from './see-all/see-all.component';
import { DetailComponent } from './detail/detail.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: SeeAllComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
