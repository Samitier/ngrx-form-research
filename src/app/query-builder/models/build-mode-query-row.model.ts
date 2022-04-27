export interface BuildModeQueryRow {
  id: string;
  isActive: boolean;
  metric: string;
  calculation: string;
  splitBy: string;
  filterBy: string;
  sortBy: string;
  limitBy: number;

  queryRowFieldsVisibility: QueryRowFieldsVisibility;
}

interface QueryRowFieldsVisibility {
  isFilterByVisible: boolean;
  isSplitByVisible: boolean;
  isLimitByVisible: boolean;
  isSortByVisible: boolean;
}
