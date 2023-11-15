import { createRandomArr } from "./createRandom.js";
function quickSort(nums) {
    if (nums.length < 2) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = [];
    let right = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > mid) {
            right.push(nums[i]);
        } else {
            left.push(nums[i]);
        }
    }
    return [...quickSort(left), nums[mid], ...quickSort(right)];
}

let arr = createRandomArr();
console.log("🚀 ~ file: bubbleSort.js:13 ~ arr:", arr);
arr = quickSort(arr);
console.log("🚀 ~ file: 冒泡排序.js:13 ~ arr:", arr);
