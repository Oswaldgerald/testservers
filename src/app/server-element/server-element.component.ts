import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange is called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('OnInit is called !');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is Called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called !');
  }

}

