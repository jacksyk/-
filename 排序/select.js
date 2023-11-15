import { createRandomArr } from "./createRandom.js";
function selectSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
    }
}

let arr = createRandomArr();
console.log("🚀 ~ file: bubbleSort.js:13 ~ arr:", arr);
selectSort(arr);
console.log("🚀 ~ file: 冒泡排序.js:13 ~ arr:", arr);
