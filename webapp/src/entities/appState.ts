export interface appState {
  toggleColumn: (id: number) => void;
  setFilter: (filter: string, value: any) => void;
  hiddenColumns: number[],
  filters: {
    [key: string]: boolean | string | number,
  }
}
