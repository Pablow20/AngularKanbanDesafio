import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuadroComponent} from './quadro/quadro.component';
import {NovaTaskComponent} from './nova-task/nova-task.component';
import {TelaLoginComponent} from './tela-login/tela-login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {TelaDeEditarComponent} from './tela-de-editar/tela-de-editar.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'quadro-geral', component: QuadroComponent },
  { path: 'nova-tarefa', component: NovaTaskComponent },
  { path: 'editar-task/:id', component: TelaDeEditarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
