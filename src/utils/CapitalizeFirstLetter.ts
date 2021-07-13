export const CapitalizeFirstLetter = (str: string) => {
  try {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } catch (e) {
    return str;
  }
};
