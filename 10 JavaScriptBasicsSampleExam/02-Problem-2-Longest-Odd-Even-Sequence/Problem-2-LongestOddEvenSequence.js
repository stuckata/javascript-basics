function solve(input) {

    var nums = input[0].split(/[ ()]+/);
    nums = nums.filter(function(v){return v!==''});

    var maxLength = 0;
    var currLength = 0;
    var oddRule = nums[0] % 2 != 0; //if true number is odd
    for (var i = 0; i < nums.length; i++) {
        var isOdd = nums[i] % 2 != 0; //if true number is odd
        if(isOdd == oddRule || nums[i] == 0) {
            currLength++;
        } else {
            oddRule = isOdd;
            currLength = 1;
        }
        oddRule = !oddRule;
        if (currLength > maxLength) {
            maxLength = currLength;
        }
    }
    return maxLength;
}

console.log(solve(["(3) (22) (-18) (55) (44) (3) (21)"]));
console.log(solve(["(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)"]));
console.log(solve(["( 2 )  ( 33 ) (1) (4)   (  -1  ) "]));
console.log(solve(["(102)(103)(0)(105)  (107)(1)"]));
console.log(solve(["(2) (2) (2) (2) (2)"]));
console.log(solve(["(1) (0) (0) (0) (0)"]));
console.log(solve(["(1) (0) (0) (0) (0) (5)"]));
console.log(solve(["(1) (0) (0) (0) (0) (8)(9)"]));
console.log(solve(["(1) (0) (0) (0) (0) (0)(8)(9)"]));
console.log(solve(["(0) (0) (0) (0) (0) (0)(0)(0)"]));
