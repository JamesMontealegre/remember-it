import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { GridRoutingModule } from './grid-routing.module';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons"


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridRoutingModule,
    GridModule,
    DateInputsModule,
    ButtonsModule,
    IconsModule
  ]
})
export class GridComponentModule { }
