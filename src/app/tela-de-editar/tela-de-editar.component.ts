import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-tela-de-editar',
  standalone: false,

  templateUrl: './tela-de-editar.component.html',
  styleUrl: './tela-de-editar.component.css'
})
export class TelaDeEditarComponent implements OnInit {
  taskForm: FormGroup;
  taskId!: number;

  opcoesStatus = [
    { value: 1, viewValue: 'A FAZER' },
    { value: 2, viewValue: 'EM PROGRESSO' },
    { value: 3, viewValue: 'CONCLUÍDO' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taskService: ServiceService
  ) {
    this.taskForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      planned_hours: ['', [Validators.required, Validators.min(0)]],
      status: [null, Validators.required],
      owner: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.taskId).subscribe(task => {
      this.taskForm.patchValue(task); // Preenche o formulário com os dados da tarefa
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formData = {
        ...this.taskForm.value,
        id: this.taskId
      };

      this.taskService.atualizarTask(formData).subscribe({
        next: () => {
          this.router.navigate(['/quadro-geral']);
        },
        error: (err) => {
          console.error('Erro na atualização:', err);
          alert('Erro ao atualizar tarefa!');
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/quadro-geral']); // Redireciona para a lista de tarefas
  }
}
