import { createRandomArr } from "./createRandom.js";
function insertSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let cur = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > cur) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = cur;
    }
}

let arr = createRandomArr();
console.log("🚀 ~ file: bubbleSort.js:13 ~ arr:", arr);
insertSort(arr);
console.log("🚀 ~ file: 冒泡排序.js:13 ~ arr:", arr);
