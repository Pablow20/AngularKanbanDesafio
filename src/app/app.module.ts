import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ParaFazerListaComponent } from './para-fazer-lista/para-fazer-lista.component';
import { QuadroComponent } from './quadro/quadro.component';
import { TerminadoListaComponent } from './terminado-lista/terminado-lista.component';
import { WipListaComponent } from './wip-lista/wip-lista.component';
import {MatAnchor, MatButton, MatIconButton} from '@angular/material/button';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatDialogTitle} from '@angular/material/dialog';
import {MatInput, MatInputModule} from '@angular/material/input';
import { NovaTaskComponent } from './nova-task/nova-task.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import { CadastroComponent } from './cadastro/cadastro.component';
import {HttpClientModule} from '@angular/common/http';
import {MatIcon} from '@angular/material/icon';
import {MatProgressBar} from '@angular/material/progress-bar';
import { TelaDeEditarComponent } from './tela-de-editar/tela-de-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParaFazerListaComponent,
    QuadroComponent,
    TerminadoListaComponent,
    WipListaComponent,
    NovaTaskComponent,
    TelaLoginComponent,
    CadastroComponent,
    TelaDeEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButton,
    MatFormFieldModule,
    MatOption,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogTitle,
    MatInputModule,
    FormsModule,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    HttpClientModule,
    MatAnchor,
    MatIcon,
    MatProgressBar,
    MatIconButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
