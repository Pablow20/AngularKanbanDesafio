import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Task } from '../core/models/task';
import {ServiceService} from '../service.service';


@Component({
  selector: 'app-nova-task',
  standalone: false,

  templateUrl: './nova-task.component.html',
  styleUrl: './nova-task.component.css'
})
export class NovaTaskComponent {
  taskForm: FormGroup;
  opcoesStatus = [
    { value: 1, viewValue: 'A FAZER' },
    { value: 2, viewValue: 'EM PROGRESSO' },
    { value: 3, viewValue: 'CONCLUÍDO' }
  ];

  @Output() taskCreated = new EventEmitter<Task>(); // Emite a tarefa criada para outros componentes

  constructor(
    private fb: FormBuilder, // Usado para construir o formulário
    private service: ServiceService // Serviço que vai processar os dados da tarefa
  ) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      planned_hours: ['', [Validators.required, Validators.min(0)]],
      status: [null],
      owner: ['', [Validators.required]]
    });
  }

// Quando o formulário é enviado
  onSubmit() {
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;
      this.taskCreated.emit(task);
      console.log('Task enviada:', task);

      this.service.enviarDadosTask(task).subscribe(response => {
        console.log('Task criada com sucesso:', response); // Exibe sucesso no console
      });
    }
  }
}
