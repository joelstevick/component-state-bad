import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { OopComponent } from './components/oop.component';
import { FpComponent } from './components/fp.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FpComponent, OopComponent],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
