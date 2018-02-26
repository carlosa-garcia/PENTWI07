import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksTotalProgress() {
     var progress = (this.completedTasks() / this.taskService.tasks.length)*100 + '%';
     return progress;
  }

  disableClearAllTasks() {
    var disableButton: boolean = true;
    if (this.taskService.tasks.length >= 1 ) {
      disableButton = false;
    } else {
      disableButton = true;
    }
    return disableButton;
  }

  completedTasks() {
    var completedTasks: number = 0;
    this.taskService.tasks.forEach(function(obj, objIndex){
      if (obj.completed == true) {
        completedTasks += 1
      }
    });
    return completedTasks;
  }

  constructor(public taskService: TasksService) { }
}
