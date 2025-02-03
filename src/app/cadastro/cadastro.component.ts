import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service.service';
import {User} from '../core/models/usuarios';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  registerForm: FormGroup;


  @Output() userCadastrado = new EventEmitter<User>();

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.maxLength(150),
        Validators.pattern(/^[\w.@+-]+$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      email: ['', Validators.email],
      first_name: ['', Validators.maxLength(150)],
      last_name: ['', Validators.maxLength(150)]
    });
  }

  get username() { return this.registerForm.get('username'); }


  onSubmit() {
    if (this.registerForm.valid) {
      const usuario: User = this.registerForm.value;
      this.userCadastrado.emit(usuario);
      console.log('Conta enviada:', usuario);
      this.service.postUsuarios(usuario).subscribe(response => {
        console.log('Conta criada com sucesso:', response);
      }, error => {
        console.log('Erro ao criar conta:', error);
      });
    }
  }
}
