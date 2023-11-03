import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'cpkt-base',
  template: '',
})
export class BaseComponent implements OnDestroy {
  public unsubscribe = new Subject();

  public ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }
}
