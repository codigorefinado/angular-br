import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2.directive';

@NgModule({
  imports: [],
  exports: [ HighlightDirective, Highlight2Directive ],
  declarations: [ HighlightDirective, Highlight2Directive ],
  providers: [],
})
export class HighlightModule {
}

