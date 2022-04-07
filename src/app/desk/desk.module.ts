import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskRoutingModule } from './desk-routing.module';
import { DeskComponent } from './desk.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    DeskComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DeskRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DeskModule { }
