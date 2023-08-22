import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _tasks: Task[] = []

  getData(){
    return this._tasks;
  }

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
    return this.http
      .get<{[key:string]: Task}>(this.baseUrl+'tasks.json')
      .pipe(map(resData => {
        console.log(resData)
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            const task:Task = new Task(resData[key].title, resData[key].description, new Date(resData[key].startDate),
                        new Date(resData[key].endDate), +resData[key].priority)
            task.id = key
            this._tasks.push(task)
          }
        }
      }))
  }

  getTaskById(){

  }

  constructor(private http: HttpClient) { }
}
