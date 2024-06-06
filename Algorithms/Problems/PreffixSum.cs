public class Solution
{
    public int PivotIndex(int[] nums)
    {
        int l = nums.Length;
        int[] sumLeft = new int[l];
        int[] sumRight = new int[l];
        sumLeft[0] = nums[0];
        sumRight[l - 1] = nums[l - 1];

        for (int i = 1; i < l; ++i)
        {
            sumLeft[i] = sumLeft[i - 1] + nums[i];
        }
        for (int j = l - 2; j >= 0; --j)
        {
            sumRight[j] = sumRight[j + 1] + nums[j];
        }
        for (int i = 0; i < l; ++i)
        {
            if (sumLeft[i] == sumRight[i])
            {
                return i;
            }
        }
        return -1;
    }
}