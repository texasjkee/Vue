export const getPrevMonth = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth() - 1);
