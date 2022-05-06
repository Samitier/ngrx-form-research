import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addQueryRow,
  translateToBuildMode,
  translateToCodeMode,
} from './state/query.actions';
import { selectQuery } from './state/query.selector';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css'],
})
export class QueryBuilderComponent {
  @Output() onRunQuery = new EventEmitter();

  isBuildMode = true;
  query$ = this.store.select(selectQuery);

  constructor(private store: Store) {}

  addRow() {
    this.store.dispatch(addQueryRow({}));
  }

  toggleBuildMode() {
    this.store.dispatch(translateToBuildMode());
    this.isBuildMode = true;
  }

  toggleCodeMode() {
    this.store.dispatch(translateToCodeMode());
    this.isBuildMode = false;
  }

  runQuery() {
    this.onRunQuery.emit();
  }
}
