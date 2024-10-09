var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 1;
    let end = n;
    let middle = Math.floor((start + end) / 2);

    while (start <= end) {
      if (
        isBadVersion(middle) === true &&
        (isBadVersion(middle - 1) === false || middle == 1)
      ) {
        return middle;
      }

      if (isBadVersion(middle) == false) {
        start = middle + 1;
      } else {
        end = middle;
      }
      middle = Math.floor((start + end) / 2);
    }
    return middle;
  };
};
