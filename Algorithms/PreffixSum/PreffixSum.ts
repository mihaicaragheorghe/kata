export default function pivot_index(nums: number[]): number {
    const len = nums.length;
    const sum_left: number[] = [];
    const sum_right: number[] = [];
    sum_left[0] = nums[0];
    sum_right[len - 1] = nums[len - 1];

    for (let i = 1; i < len; ++i) {
        sum_left[i] = sum_left[i - 1] + nums[i];
    }
    for (let j = len - 2; j >= 0; --j) {
        sum_right[j] = sum_right[j + 1] + nums[j];
    }
    for (let i = 0; i < len; ++i) {
        if (sum_left[i] === sum_right[i]) {
            return i;
        }
    }

    return -1;
}
