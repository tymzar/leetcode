function minAddToMakeValid(s: string): number {
  let stackHeight = 0;
  let toAdd = 0;

  for (const letter of s) {
    if (letter === "(") {
      stackHeight++;
    } else if (stackHeight) {
      stackHeight--;
    } else {
      toAdd++;
    }
  }

  return toAdd + stackHeight;
}
