import { createSelector, createFeatureSelector, select } from '@ngrx/store';
import { QueryRow } from './query-row.model';

export const selectQuery =
  createFeatureSelector<ReadonlyArray<QueryRow>>('query');

export const selectQueryById = (id: string) =>
  createSelector(selectQuery, (query) => query.find((row) => row.id === id));
