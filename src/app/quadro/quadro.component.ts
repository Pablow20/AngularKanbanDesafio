import { Component } from '@angular/core';
import { Task } from '../core/models/task';
import {ServiceService} from '../service.service';


@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css'],
  standalone: false
})
export class QuadroComponent {
  tarefasAFazer: Task[] = [];
  tarefasEmProgresso: Task[] = [];
  tarefasConcluidas: Task[] = []

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.carregarTasks();
  }

  carregarTasks() {
    // Faz uma requisição ao serviço para pegar as tarefas
    this.service.getTasks().subscribe({
      next: (tasks) => {
        // Filtra as tarefas para separá-las em três categorias de status
        this.tarefasAFazer = tasks.filter(task => task.status === 1); // Tarefas com status 1 (a fazer)
        this.tarefasEmProgresso = tasks.filter(task => task.status === 2); // Tarefas com status 2 (em progresso)
        this.tarefasConcluidas = tasks.filter(task => task.status === 3); // Tarefas com status 3 (concluídas)
      },
      error: (err) => console.error('Erro ao carregar tasks:', err) // Exibe erro caso a requisição falhe
    });
  }

}
