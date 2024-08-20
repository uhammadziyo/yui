let nums = [10,12,0,30,20,6,0,45,25];

let juft_arr = []
let toq_arr = []

for (let i = 0; i < nums.length; i++) {
     if (nums[i] % 2 == 0) {
         juft_arr.push(nums[i])
     }else{
        toq_arr.push(nums[i])
     }
}

console.log(juft_arr);
console.log(toq_arr);