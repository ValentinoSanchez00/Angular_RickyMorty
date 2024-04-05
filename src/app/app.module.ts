import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './welcome/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './information/table/table.component';
import { TargetComponent } from './welcome/target/target.component';
import { InformationComponent } from './welcome/information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    HomeComponent,
    TargetComponent,
    InformationComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
