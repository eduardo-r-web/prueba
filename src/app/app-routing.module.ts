import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DeskComponent } from './desk/desk.component';

const routes: Routes = [
    { 
        path: '',
        redirectTo: 'work-space',
        pathMatch: 'full'
    },
    {
        path: 'work-space',
        loadChildren: ()=> import('./desk/desk.module').then( m => m.DeskModule),
        component: DeskComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot( routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
