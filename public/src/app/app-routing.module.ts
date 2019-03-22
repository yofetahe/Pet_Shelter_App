import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PetListComponent },
  { path: 'pets', component: PetListComponent },
  { path: 'pets/new', component: PetCreateComponent },
  { path: 'pets/:id', component: PetViewComponent },
  { path: 'pets/:id/edit', component: PetEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
