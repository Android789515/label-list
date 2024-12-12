export const predictNextLabel = (currentLabel: string) => {
  if (currentLabel.includes('L')) {
    const [ number, line ] = currentLabel.split('L').map(num => Number(num));

    const nextNumber = number + 1;

    if (line < 3) {
      const nextLine = line + 1;

      return number + 'L' + nextLine;
    } else {
      return nextNumber + 'L1';
    }
  }

  return currentLabel;
};
