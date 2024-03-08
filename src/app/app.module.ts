import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './components/session/pages/session.component';
import { GridComponent } from './components/grid/pages/grid.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './components/register/pages/register.component';
import { RecoveryComponent } from './components/recovery/pages/recovery.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    GridComponent,
    RegisterComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    GridModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
