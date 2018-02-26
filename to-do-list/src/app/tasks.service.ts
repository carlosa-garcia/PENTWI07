import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  task: string = "";
  tasks: Array<any> = [];

  private taskExists(taskToVerify: string) {
    var stringExists: boolean = false;
    
    if (this.tasks.length >= 1) {
        this.tasks.forEach(function(obj, objIndex){
          if (taskToVerify == obj.text){
            stringExists = true;
          }
        });
    }
    
    return stringExists;
  }

  addTask(task) {
    if ( ! this.taskExists(task) && this.task != "") {
      this.tasks.push({text:task, completed: false})
      this.task = "";
    }
  }

  toggleCompleted(task) {
    this.tasks.forEach(function(obj, objIndex){
      if (task.text == obj.text) {
        obj.completed = !obj.completed;
      }
    });
  }

  clearAllTasks(){
    this.tasks = [];
  }
  
  clearCompletedTasks(){
    var tmp_list: Array<any> = [];
    this.tasks.forEach(function(obj, objIndex){
      if (!obj.completed) {
        // creating a tmp list because splice caused an error with code
        // this.tasks.splice(objIndex, 1)
        tmp_list.push(obj)
      }
    })
    this.tasks = tmp_list;
  }

  constructor() { }
}
