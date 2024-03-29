import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  completed: boolean = false;
  taskList: any[] = []
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })
    
  constructor(
    private formBuilder: FormBuilder
  ) { }
  
  

  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({ id: this.taskList.length, name: value })
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    this.newTodoForm.reset();
    
  }

  removeTask(i: any) {
    this.taskList.splice(i, 1)
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    
  }

  /* markDone(value: any) {
    value.completed = !value.completed
    value.completed === true ?
      this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
      this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
  } */
  
  

  ngOnInit(): void {
  }

}
function todoItem(todoItem: any) {
  throw new Error('Function not implemented.');
}


