import { PipePipe } from './Pipes/pipe.pipe';
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenemeComponent } from './deneme/deneme.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DenemeComponent,
    HeaderComponent,
    FooterComponent,
    PipePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
