export const getMonthList = (
  locales?: string | string[],
  format: 'long' | 'short' = 'long'
): string[] => {
  const year = new Date().getFullYear();
  const monthList = [...Array(12).keys()];
  const formatter = new Intl.DateTimeFormat(locales, {
    month: format,
  });

  const getMonthName = (monthIndex: number) =>
    formatter.format(new Date(year, monthIndex));

  return monthList.map(getMonthName);
};
