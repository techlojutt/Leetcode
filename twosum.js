function twoSum(nums,target)
{
    let number = [];
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = i+1; j < nums.length; j++) 
        {
            if(nums[i]+nums[j]==target)
            {
               number.push(i,j);
            }
        }
    }
    return number ;
}
var nums = [3,2,4,5];
var target = 9;
var returnArr = twoSum(nums,target);
console.log(returnArr);


