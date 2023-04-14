import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  data: { id: number, text: string }[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 12; i++) {
      this.data.push({ id: (i + 1), text: environment.text });
    }
  }

  trackByIdFn(_: number, data: { id: number, text: string }): number {
    return data.id;
  }

}
