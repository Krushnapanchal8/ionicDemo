import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  },
  {
    path: 'contact-details',
    loadChildren: () => import('./contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
