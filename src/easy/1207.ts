function uniqueOccurrences(arr: number[]): boolean {
  // Create a map to count the occurrences of each number in the array
  const frequencyMap = new Map<number, number>();

  // Populate the map with the frequency of each number
  arr.forEach((number) =>
    frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1)
  );

  // Extract the values (frequencies) from the map
  const occurrenceCounts = [...frequencyMap.values()];

  // Check if the number of unique frequencies matches the total number of frequencies
  return occurrenceCounts.length === new Set(occurrenceCounts).size;
}
