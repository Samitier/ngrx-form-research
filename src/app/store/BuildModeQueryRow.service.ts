import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { BuildModeQueryRow } from '../query-builder/models/build-mode-query-row.model';

@Injectable({ providedIn: 'root' })
export class BuildModeQueryRowService extends EntityCollectionServiceBase<BuildModeQueryRow> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('BuildModeQueryRow', serviceElementsFactory);
  }
}
