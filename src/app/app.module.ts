import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { ApplayoutComponent } from './components/AppLayout/applayout.component';
import { Datatable } from './components/Datatable/datatable.component';
import { DialogComponent } from './components/Dialog/dialog.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/tarefas/cadastro/cadastro.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplayoutComponent,
    CadastroComponent,
    TarefasComponent,

  ],
  imports: [
    DialogComponent,
    Datatable,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
  ],
  providers: [MatFormField],
  bootstrap: [AppComponent]
})
export class AppModule { }
