export interface Fetch<T> {
  data: T | null;
  error: any;
  loading: boolean;
}