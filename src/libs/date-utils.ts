export const humanizeDate = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const humanizeDateWithTime = (date: string) => {
  return (
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }) +
    ', ' +
    new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
    })
  );
};

export const year = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
  });
};

export const daysSince = (date: string) => {
  const today = new Date();
  const then = new Date(date);
  const diff = today.getTime() - then.getTime();
  return Math.ceil(diff / (1000 * 3600 * 24));
};
