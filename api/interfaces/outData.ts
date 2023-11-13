export interface OutData<T> {
  state: number;
  message: string;
  total?: number;
  data?: T[];
}
