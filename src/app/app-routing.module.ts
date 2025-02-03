import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuadroComponent} from './quadro/quadro.component';
import {NovaTaskComponent} from './nova-task/nova-task.component';
import {TelaLoginComponent} from './tela-login/tela-login.component';
import {CadastroComponent} from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'quadro-geral', component: QuadroComponent },
  { path: 'criar-task', component: NovaTaskComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
