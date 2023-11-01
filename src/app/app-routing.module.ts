import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplayoutComponent } from './components/AppLayout/applayout.component';
import { LoginComponent } from './pages/login/login.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ApplayoutComponent,
    children: [
      {
        path: 'tarefas',
        component: TarefasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
