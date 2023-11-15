import { createRandomArr } from "./createRandom.js";
function merge(nums) {
    if (nums.length < 2) return nums;
    let mid = Math.floor(nums.length / 2);
    return mergeSort(merge(nums.slice(0, mid)), merge(nums.slice(mid)));
}
function mergeSort(left, right) {
    let res = [];
    let l1 = 0,
        l2 = 0;
    while (l1 < left.length && l2 < right.length) {
        if (left[l1] < right[l2]) {
            res.push(left[l1++]);
        } else {
            res.push(right[l2++]);
        }
    }
    while (l1 < left.length) {
        res.push(left[l1++]);
    }
    while (l2 < right.length) {
        res.push(right[l2++]);
    }
    return res;
}

let arr = createRandomArr();
console.log("🚀 ~ file: bubbleSort.js:13 ~ arr:", arr);
arr = merge(arr);
console.log("🚀 ~ file: 冒泡排序.js:13 ~ arr:", arr);
