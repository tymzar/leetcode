/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxLevelSum(root: TreeNode | null): number {
  if (root && root.left == null && root.right == null) {
    return 1;
  }

  // Get sums array from the recursive helper function
  const levelSums = collectLevelSums(root);

  // Return index of max value + 1 (levels are 1-indexed)
  return levelSums.indexOf(Math.max(...levelSums)) + 1;
}

function collectLevelSums(node: TreeNode | null): number[] {
  if (node == null) {
    return [];
  }

  const leftSums = collectLevelSums(node.left);
  const rightSums = collectLevelSums(node.right);

  const mergedSums = merge(leftSums, rightSums);

  // Add current node's value at the beginning
  return [node.val, ...mergedSums];
}

function merge(arrayA: number[], arrayB: number[]): number[] {
  const [shorterArray, longerArray] =
    arrayA.length < arrayB.length ? [arrayA, arrayB] : [arrayB, arrayA];

  for (let mergeIndex = 0; mergeIndex < shorterArray.length; mergeIndex++) {
    longerArray[mergeIndex] += shorterArray[mergeIndex];
  }

  return longerArray;
}
