import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data: { id: number, text: string }[] = [];

  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(
    untilDestroyed(this),
    map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly viewport: ViewportScroller) { }

  ngOnInit(): void {
    for (let i = 0; i < 12; i++) {
      this.data.push({ id: ( i + 1), text: environment.text });
    }
  }

  trackByIdFn(_: number, data: { id: number, text: string }): number {
    return data.id;
  }

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }

}
