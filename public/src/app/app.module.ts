import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListComponent,
    PetCreateComponent,
    PetEditComponent,
    PetViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
