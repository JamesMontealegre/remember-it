import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { GridRoutingModule } from './grid-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridRoutingModule,
    GridModule
  ]
})
export class GridComponentModule { }
