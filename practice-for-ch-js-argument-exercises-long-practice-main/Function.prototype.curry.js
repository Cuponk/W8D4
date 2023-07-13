Function.prototype.myCurry = function(numArgs){
    let args = [];
    const func = this;
    return function _curriedFunction(arg){
        args.push(arg);
        if(args.length === numArgs){
            //invoke
            return func(...args);
        } else{
            //recursive
            return _curriedFunction;
        }
    }
}

Function.prototype.myCurry1 = function(numArgs){
    let args = [];
    const func = this;
    return function _curriedFunction(arg){
        args.push(arg);
        if(args.length === numArgs){
            //invoke
            return func.apply(numArgs, args);
        } else{
            //recursive
            return _curriedFunction;
        }
    }
}

function sum(args){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}


const sum1 = sum.myCurry(4);
console.log(sum1(3)(3)(3)(1));

const sum2 = sum.myCurry1(4);
console.log(sum2(3)(5)(3)(8));