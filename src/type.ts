export interface IPerformanceTestService {
  read(id: number): Promise<{ time: number }>;
  write(data: any): Promise<{ time: number }>;
  search(query: any): Promise<{ time: number }>;
}
