export const MinutesToHours = (t: number) => {
  try {
    const hours = t / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours !== 0 && rminutes !== 0
      ? `${rhours}h ${rminutes}m`
      : rminutes !== 0
      ? `${rminutes}m`
      : rhours !== 0
      ? `${rhours}h`
      : 0;
  } catch (e) {}
};
