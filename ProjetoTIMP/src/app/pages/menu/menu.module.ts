import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './menu.component';
import { MetasComponent } from './metas/metas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TarefasComponent } from './tarefas/tarefas.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    MenuComponent,
    MetasComponent,
    PerfilComponent,
    TarefasComponent,
    AgendaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    MetasComponent,
    PerfilComponent,
    TarefasComponent
  ]
})
export class MenuModule { }
