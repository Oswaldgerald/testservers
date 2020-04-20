import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ElementRef,
  ViewEncapsulation,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ContentChild,
  OnDestroy, ViewChild,
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
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange is called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('OnInit is called !');
    console.log('Text header if any :' + this.header.nativeElement.textContent);
    console.log('Text content if any :' + this.paragraph.nativeElement.textContent);
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
    console.log('Text header if any :' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called!');
    console.log('Text content if any :' + this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngDestroy is called!');
  }

}

