// increse value

function stop(){
    let count =0;
    return function(){
        count++;
        return count;
    }
}
let plus =stop();
console.log(plus());
console.log(plus());