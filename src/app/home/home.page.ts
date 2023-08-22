import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private taskService: TaskService) {}

  ionViewWillEnter(){
    this.taskService.saveTask({
      title: 'task title',
      description: 'task description',
      startDate: new Date(),
      endDate: new Date(),
      priority: 10
    })
  }

}
