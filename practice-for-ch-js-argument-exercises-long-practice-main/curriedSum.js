function sum(numArgs){
    const nums = [];
    return function curry(num){
        nums.push(num);
        if(nums.length === numArgs){
            let sum = 0;
            for(let i = 0; i < nums.length; i++){
                sum += nums[i];
            }
            return sum;
        }
        else{
            return curry;
        }
    }
}

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }
  
// //   sumThree(4, 20, 6); // == 30
  
// //   you'll write `Function#curry`!
  
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
// //   or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30

  const sum1 = sum(3);
  console.log(sum1(3)(3)(3));
// console.log(sum(5)(30)(20)(1)(3)); // => 56