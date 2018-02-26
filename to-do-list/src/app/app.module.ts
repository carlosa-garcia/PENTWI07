import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';
import { StorageService } from './storage.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
