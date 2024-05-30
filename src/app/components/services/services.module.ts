import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SeeAllComponent } from './see-all/see-all.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [SeeAllComponent, DetailComponent, ServicesComponent],
  imports: [CommonModule, ServicesRoutingModule, HttpClientModule],
})
export class ServicesModule {}
