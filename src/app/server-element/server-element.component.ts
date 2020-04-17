import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit, OnDestroy {
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

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called !');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called!');
  }

  ngOnDestroy(): void {
    console.log('ngDestroy is called!');
  }

}

