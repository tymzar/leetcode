function maxWidthRamp(nums: number[]): number {
  const indexes = nums.map((_, idx) => idx).sort((a, b) => nums[a] - nums[b]);

  const stack: Array<number> = [];
  let result = 0;
  for (let i = 0; i < indexes.length; i++) {
    while (stack.length && indexes[stack.at(-1)!] >= indexes[i]) {
      const lastIdx = stack.pop()!;
      const diff = stack.length
        ? indexes[lastIdx] - indexes[stack[0]]
        : -Infinity;

      result = Math.max(diff, result);
    }

    stack.push(i);
  }

  while (stack.length) {
    const lastIdx = stack.pop()!;
    const diff = stack.length
      ? indexes[lastIdx] - indexes[stack[0]]
      : -Infinity;

    result = Math.max(diff, result);
  }

  return result;
}
