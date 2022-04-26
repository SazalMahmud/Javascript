
// number addition useing argument
function addNumbers(num1 ,num2){
    let result =0;
    for(const num of arguments){
        result = result+num;
    }
    return result;
    
}
const sum = addNumbers(12,33,45,555,55);
//console.log(sum);

// string addition 
function getFullName(firstName ,lastName){
    let fullName = ' ';
    for(const part of arguments){
        fullName = fullName + part;
    }
    return fullName;
}
const name2 = getFullName('sazal' , 'kamal','rofiq','ruhul');
console.log(name2);
