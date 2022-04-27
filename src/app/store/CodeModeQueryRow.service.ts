import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { CodeModeQueryRow } from '../query-builder/models/code-mode-query-row.model';

@Injectable({ providedIn: 'root' })
export class BuildModeQueryRowService extends EntityCollectionServiceBase<CodeModeQueryRow> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('CodeModeQueryRow', serviceElementsFactory);
  }
}
