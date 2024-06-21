import { FC, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { getDaysInMonth } from 'date-fns';
import { type Event } from '@/store/eventStore/types';
import { type Periods, getChartPeriod, getEventChartData } from '@/utils/date';

export interface MonthlyEventData {
  month: number;
  day: number;
  lastDay: number;
  totalPrice: number;
  eventCount: number;
}

type EventChartProps = {
  events: Event[];
  period: Periods;
};

function getTwoWeeksPeriodValue(event: MonthlyEventData) {
  const TWO_WEEKS_PERIOD = 14;
  return event.day + TWO_WEEKS_PERIOD > event.lastDay ? 2 : 1;
}

const EventChart: FC<EventChartProps> = ({ events, period }) => {
  const [monthlyData, setMonthlyData] = useState<MonthlyEventData[]>([]);

  useEffect(() => {
    if (events.length > 0) {
      const data: MonthlyEventData[] = [];

      events.forEach((event) => {
        const eventMonth = new Date(event.date).getMonth();
        const eventDay = new Date(event.date).getDate();
        const lastDayOfMonth = getDaysInMonth(event.date);
        const existingMonthData = data.find(
          (item) => item.month === eventMonth
        );

        if (existingMonthData) {
          existingMonthData.totalPrice += event.price;
          existingMonthData.eventCount += 1;
        } else {
          data.push({
            month: eventMonth,
            day: eventDay,
            lastDay: lastDayOfMonth,
            totalPrice: event.price,
            eventCount: 1,
          });
        }
      });

      data.sort((a, b) => a.month - b.month);
      const chartPeriod = getChartPeriod(period);
      const sortedByPeriod = chartPeriod
        ? data.slice(0, chartPeriod)
        : data.slice(0, getTwoWeeksPeriodValue(data[0]));

      setMonthlyData(sortedByPeriod);
    }
  }, [events, period]);

  useEffect(() => {
    if (monthlyData.length > 0) {
      const { totalPrices, eventCounts, labels } =
        getEventChartData(monthlyData);

      const ctx = document.getElementById('eventChart') as HTMLCanvasElement;

      const existingChart = Chart.getChart(ctx);

      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Total Price',
              data: totalPrices,
              backgroundColor: 'rgba(94, 133, 234)',
              borderColor: 'rgba(84, 119, 210)',
              borderWidth: 1,
              yAxisID: 'price',
            },
            {
              label: 'Event Count',
              data: eventCounts,
              backgroundColor: 'rgba(235, 171, 245)',
              borderColor: 'rgba(235, 171, 245, 1)',
              borderWidth: 1,
              yAxisID: 'count',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            price: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Total Price',
              },
            },
            count: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'Event Count',
              },
              grid: {
                drawOnChartArea: false,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [monthlyData]);

  return <canvas id="eventChart" className="w-full h-auto"></canvas>;
};

export default EventChart;
