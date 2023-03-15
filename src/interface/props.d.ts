import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
  id?: string;
}

export interface ICustomDot {
  data: IChart;
  cx: number;
  cy: number;
  id?: string;
}
