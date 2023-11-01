import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplayoutComponent } from './components/AppLayout/applayout.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/tarefas/cadastro/cadastro.component';
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
        component: TarefasComponent,
      },
      {
          path: 'cadastro',
          component: CadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
