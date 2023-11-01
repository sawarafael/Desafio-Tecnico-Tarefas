import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplayoutComponent } from './components/AppLayout/applayout.component';
import { ButtonComponent } from './components/Button/button.component';
import { DatatableComponent } from './components/Datatable/datatable.component';
import { LoginComponent } from './pages/login/login.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    LoginComponent,
    DatatableComponent,
    ButtonComponent,
    ApplayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
