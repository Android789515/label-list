const nextPowerLabel = (currentLabel: string) => {
  const [ number, line ] = currentLabel.split('L').map(num => Number(num));

  const nextNumber = number + 1;

  if (line < 3) {
    const nextLine = line + 1;

    return number + 'L' + nextLine;
  } else {
    return nextNumber + 'L1';
  }
};

const nextControlLabel = (currentLabel:string) => {
  const label = currentLabel.slice(0, currentLabel.length - 1);

  const letter = currentLabel.at(-1)!;

  const nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);

  return label + nextLetter;
};

export const predictNextLabel = (prevLabel: string, currentLabel: string) => {
  if (
    prevLabel.includes('L')
    && currentLabel.includes('L')
  ) {
    return nextPowerLabel(currentLabel);
  } else if (
    (!prevLabel.match(/.*[B-Z]/)
    && currentLabel.match(/.*[B-Z]/))
    || (
      prevLabel.match(/.*[B-Z]/)
      && currentLabel.match(/.*[B-Z]/))
    )
  {
    return nextControlLabel(currentLabel);
  } else {
    return currentLabel;
  }
};
