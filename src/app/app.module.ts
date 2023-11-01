import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApplayoutComponent } from './components/AppLayout/applayout.component';
import { DatatableComponent } from './components/Datatable/datatable.component';
import { LoginComponent } from './pages/login/login.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    LoginComponent,
    DatatableComponent,
    ApplayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
