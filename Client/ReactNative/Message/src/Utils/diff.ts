export const diff = (
  currentIndex: number,
  nextIndex: number,
  onScreen: number,
  offScreen: number,
  variable: number,
) => {
  if (variable >= currentIndex && variable < nextIndex) {
    return onScreen;
  } else return offScreen;
};
