import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';

import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScrollComponent } from './scroll/scroll.component';
import { ListComponent } from './list/list.component';

const CORE_MODULES = [CommonModule];
const COMPONENTS = [ScrollComponent, ListComponent];

@Component({
  standalone: true,
  imports: [...CORE_MODULES, ...COMPONENTS],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);

  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(
    map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
