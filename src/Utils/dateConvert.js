export const formatDate = (
  template,
  date,
  monthName = false,
  isGMT0 = true,
) => {
  const specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');

  date = isGMT0
    ? new Date(date - new Date().getTimezoneOffset() * 6e4)
    : new Date(date);

  const parsedDate = date
    .toISOString()
    .split(/[-:.TZ]/)
    .reduce(
      (template, item, i) => template.split(specs[i]).join(item),
      template,
    );

  if (!monthName) return parsedDate;
  else return  date.toLocaleString('en-us', { month: 'long' }) + " " +parsedDate;
};