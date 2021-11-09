import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  elements: any = [
    {id: '1. What about your brother or sister?', first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: '2. What about your brother or sister?', first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: '3. What about your brother or sister?', first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['Lesson', 'Activities', 'Audio', 'Video'];
  constructor() { }

  ngOnInit(): void {
  }

}
