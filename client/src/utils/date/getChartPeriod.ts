export type Periods = 'Two weeks' | 'One month' | 'Six months' | 'Year';

export const getChartPeriod = (period: Periods) => {
  const periods = {
    'Two weeks': 0,
    'One month': 1,
    'Six months': 6,
    Year: 12,
  };

  return periods[period];
};
