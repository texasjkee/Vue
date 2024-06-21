import { monthNames } from '@/common/const/fullDateNames';
import { type MonthlyEventData } from '@/components/EventsChart/EventsChart';

type ChartDate = {
  labels: string[];
  totalPrices: number[];
  eventCounts: number[];
};

export function getEventChartData(monthlyData: MonthlyEventData[]) {
  const chartDate: ChartDate = {
    labels: [],
    totalPrices: [],
    eventCounts: [],
  };

  monthlyData.forEach((event) => {
    chartDate.labels.push(monthNames[event.month]);
    chartDate.totalPrices.push(event.totalPrice);
    chartDate.eventCounts.push(event.eventCount);
  });

  return chartDate;
}
