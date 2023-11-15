import { createRandomArr } from "./createRandom.js";
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
}

let arr = createRandomArr();
console.log("🚀 ~ file: bubbleSort.js:13 ~ arr:", arr);
bubbleSort(arr);
console.log("🚀 ~ file: 冒泡排序.js:13 ~ arr:", arr);
