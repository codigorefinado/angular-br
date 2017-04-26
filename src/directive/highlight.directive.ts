import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}


/**

  import { HighlightDirective } from './highlight.directive';
 @NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  bootstrap: [ AppComponent ]
})
 export class AppModule { }



 <h1>My First Attribute Directive</h1>
 <p myHighlight>Highlight me!</p>

 */



