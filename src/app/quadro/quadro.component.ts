import {Component, OnInit} from '@angular/core';
import { Task } from '../core/models/task';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css'],
  standalone: false
})
export class QuadroComponent implements OnInit {
  tarefasAFazer: Task[] = [];
  tarefasEmProgresso: Task[] = [];
  tarefasConcluidas: Task[] = [];

  constructor(
    private service: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarTasks();
  }

  adicionarTask(): void {
    this.router.navigate(['/nova-tarefa']);
  }


  carregarTasks() {
    this.service.getTasks().subscribe({
      next: (tasks) => {
        this.tarefasAFazer = tasks.filter(task => task.status === 1);
        this.tarefasEmProgresso = tasks.filter(task => task.status === 2);
        this.tarefasConcluidas = tasks.filter(task => task.status === 3);
      },
      error: (err) => console.error('Erro ao carregar tasks:', err)
    });
  }

  editarTask(id: number): void {
    this.router.navigate(['/editar-task', id]);
  }

}
