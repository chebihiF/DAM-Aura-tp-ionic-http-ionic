import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "https://ionic-app-dam-default-rtdb.firebaseio.com/"

  saveTask(task: Task){
    return this.http
    .post(this.baseUrl+'tasks.json',task)
    .pipe(tap(resData => {
      console.log(resData)
    }))
  }

  updateTask(){

  }

  deleteTask(){

  }

  getTasks() {

  }

  getTaskById(){

  }

  constructor(private http: HttpClient) { }
}
