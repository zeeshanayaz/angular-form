import { FormGroup, FormArray, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-todo',
  templateUrl: './course-todo.component.html',
  styleUrls: ['./course-todo.component.css']
})
export class CourseTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    topics: new FormArray([]),
  });

 
  
  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = ' ';
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}

