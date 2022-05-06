import { QueryRow } from './query-row.model';

export interface AppState {
  query: ReadonlyArray<QueryRow>;
}
