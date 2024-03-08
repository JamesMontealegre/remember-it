import { Component } from '@angular/core';
import { CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { BehaviorSubject } from 'rxjs';
import { userListMock } from 'src/app/mocks/user.mock';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  value = '';

  breadcrumb = {
    first: 'panel de administración',
    second: 'usuarios'
  }

  gridData = userListMock;

  idFilterField$ = new BehaviorSubject<string>('');

  sort: SortDescriptor[] = [
    {
      field: 'type',
      dir: 'asc',
    },
  ];
  filterable = true;
  filter: CompositeFilterDescriptor | undefined;

}
