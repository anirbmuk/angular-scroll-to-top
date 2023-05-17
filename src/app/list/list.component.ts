import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';

const CORE_MODULES = [CommonModule];

@Component({
  standalone: true,
  imports: [...CORE_MODULES],
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
