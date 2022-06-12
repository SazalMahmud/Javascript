const value = {x:1, y:2};
const value2 = {x:1 ,y:2,u:3};
function compareObj(a,b){
    if(Object.keys(a).length !== Object.keys(b).length){
        return false;
    }
    for(const loop in a){
        if(a[loop] !==b[loop]){
            return false;
        }
    }
    return true;
}
const result = compareObj(value,value2);
console.log(result);