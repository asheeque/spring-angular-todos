import { Component, OnInit } from '@angular/core';

// interface ToDo {
//   id: number;
//   description: string;
// }

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: ToDo[] = [
    new ToDo(1,'Learn to dance',false,new Date()),
    new ToDo(2,'Learn to sing',false,new Date()),
    new ToDo(3,'Learn to code',false,new Date()),
    new ToDo(4,'Learn to run',false,new Date())

  ];

  ngOnInit(): void {}
}
