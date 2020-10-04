import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardTestConfigComponent } from './card-test-config/card-test-config.component';

const routes: Routes = [
  {
    path: '',
    component: CardTestConfigComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
