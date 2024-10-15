function minimumSteps(s: string): number {
  // Convert the input string into an array of characters for easier manipulation
  const binaryArray = s.split("");

  let totalSteps = 0; // Variable to track the total number of steps
  let endPointer = s.length - 1; // End pointer starting at the last index
  let startPointer = s.length - 1; // Start pointer starting at the last index

  // Traverse the array from the end to the beginning
  while (startPointer >= 0) {
    // If both end and start point to a '1', move the end pointer
    if (binaryArray[endPointer] === "1") {
      endPointer--;
      startPointer = endPointer - 1; // Move start to one position before end
      continue;
    }

    // If both start and end point to '0', just move the start pointer
    if (binaryArray[startPointer] === "0" && binaryArray[endPointer] === "0") {
      startPointer--;
      continue;
    }

    // If start points to '1' and end points to '0', we perform a step
    if (binaryArray[startPointer] === "1" && binaryArray[endPointer] === "0") {
      totalSteps += endPointer - startPointer; // Add the steps needed to shift the '1'
      binaryArray[startPointer] = "0"; // Mark the '1' as shifted by changing it to '0'
      endPointer--;
      startPointer--;
    }
  }

  return totalSteps; // Return the total number of steps
}
