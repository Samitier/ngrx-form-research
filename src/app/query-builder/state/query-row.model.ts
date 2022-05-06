export interface QueryRow {
  id: string;
  isActive: boolean;
  metric: string;

  // Would be cool to have this calculated
  code: string;

  aggregationType: string;
  splitBy: string;
  filterBy: string;
  sortBy: string;
  limitBy: number;

  queryRowFieldsVisibility: QueryRowFieldsVisibility;
}

export interface QueryRowFieldsVisibility {
  isFilterByVisible: boolean;
  isSplitByVisible: boolean;
  isLimitByVisible: boolean;
  isSortByVisible: boolean;
}

export const defaultQueryRowFieldsVisibility: QueryRowFieldsVisibility = {
  isFilterByVisible: true,
  isSplitByVisible: true,
  isLimitByVisible: false,
  isSortByVisible: false,
};

export const defaultQueryRow: QueryRow = {
  id: 'A',
  isActive: true,
  metric: '',
  aggregationType: '',
  code: '',
  splitBy: '',
  filterBy: '',
  sortBy: '',
  limitBy: 100,

  queryRowFieldsVisibility: defaultQueryRowFieldsVisibility,
};
