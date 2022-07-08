import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    loadChildren: () => import('./sidemenu/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'outbox',
    loadChildren: () => import('./sidemenu/outbox/outbox.module').then( m => m.OutboxPageModule)
  },
  {
    path: 'spam',
    loadChildren: () => import('./sidemenu/spam/spam.module').then( m => m.SpamPageModule)
  },
  {
    path: 'trash',
    loadChildren: () => import('./sidemenu/trash/trash.module').then( m => m.TrashPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./sidemenu/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'archived',
    loadChildren: () => import('./sidemenu/archived/archived.module').then( m => m.ArchivedPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./loginModule/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./loginModule/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
