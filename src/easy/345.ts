function reverseVowels(s: string): string {
  if (s.length === 1) {
    return s;
  }

  const vowels = new Set("AEIOUaeiou".split(""));

  const letters = s.split("");

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const startLetter = vowels.has(letters[start].toLowerCase());
    const endLetter = vowels.has(letters[end].toLowerCase());

    if (startLetter && endLetter) {
      const temp = letters[end];
      letters[end] = letters[start];
      letters[start] = temp;

      start++;
      end--;
      continue;
    }

    if (!startLetter) {
      start++;
      continue;
    } else if (!endLetter) {
      end--;
      continue;
    } else {
      start++;
      end--;
    }
  }

  return letters.join("");
}
