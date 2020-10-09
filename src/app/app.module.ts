import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbActionsModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbSelectModule, NbFormFieldModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardDesignComponent } from './card-design/card-design.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbSelectModule,
    NbFormFieldModule,
    NbIconModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
